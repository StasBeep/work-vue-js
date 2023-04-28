export default { 
    install(Vue){
        // Проверка на истановку плагина
        if(this.installed){
            return;
        }

        this.installed = true;
        this.caller = null;

        Vue.prototype.$context = {
            // ликвидация одинаковых названий
            EventBus: new Vue(),
            
            /**
             * Функция видимости: delete и edit
             */
            show({event, items}) {
                const caller = event.target;
                if(caller !== this.caller) {
                    this.caller = caller;
                    this.EventBus.$emit('shown', { items, caller });
                } else {
                    this.close();
                }
            },

            /**
             * Функция закрытия delete и edit
             */
            close() {
                this.called = null;
                this.EventBus.$emit('close');
            },
        }
    }
}