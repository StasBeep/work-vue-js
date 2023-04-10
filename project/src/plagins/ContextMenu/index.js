export default {
    install(Vue) {
        // Проыерка на установку плагина
        if (this.installed) {
            return;
        }

        this.installed = true;
        this.called = null;

        Vue.prototype.$context = {
            // ликвидация одинаковых названий
            EventBus: new Vue(),

            show({
                event,
                items
            }) {
                const called = event.target;
                if (called !== this.called) {
                    this.called = called;
                    this.EventBus.$emit('shown', {
                        items,
                        called
                    });
                } else {
                    this.close();
                }
            },

            close() {
                this.called = null;
                this.EventBus.$emit('close');
            }
        }
    }
}