export default {
    install(Vue) {
        // Проверка установки плагина
        if (this.installed) {
            return
        }
        this.installed = true

        Vue.prototype.$modal = {
            // Подписка на события, если в компоненте
            // есть одинакое название, то оно тоже будет отрабатывать
            // Чтобы такого не было, то используем подписку
            EventBus: new Vue(),

            show(name, settings) {
                console.log(name)
                this.EventBus.$emit('shown', {name, ...settings})
            },

            hide() {
                this.EventBus.$emit('hide')
            }
        }
    }
}