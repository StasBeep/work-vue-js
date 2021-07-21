import Vue from 'vue';
import Router from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

export default new Router({
    // Убирает #
    mode: 'history',
    routes: [
        { 
            // Путь
            path: '/dashboard',
            // Компонент реализации
            component: Dashboard,
            // Имя роута (может понадобится в дальнейшем)
            name: 'dashboard'
        },
        { 
            // Путь
            path: '/about',
            // Компонент реализации
            component: About,
            // Имя роута (может понадобится в дальнейшем)
            name: 'about'
        },
        { 
            // Путь
            path: '/notfound',
            // Компонент реализации
            component: NotFound,
            // Имя роута (может понадобится в дальнейшем)
            name: 'NotFound'
        }
    ]
})