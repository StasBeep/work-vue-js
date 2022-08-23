import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

// Подключение плагина
import modal from './plagins/ModalWindow'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
