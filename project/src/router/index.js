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
            path: '/dashboard/:page',
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
        // Защита от '*', если будет начинаться на about,а заканчиваться чем-либо
        { 
            // Путь
            path: '/about*',
            // Компонент реализации
            component: About,
            // Имя роута (может понадобится в дальнейшем)
            name: 'about'
        },
        /*{ 
            // Путь
            path: '/notfound',
            // Компонент реализации
            component: NotFound,
            // Имя роута (может понадобится в дальнейшем)
            name: 'NotFound'
        }*/
        // Настройка 404 страницы (имеет приоритетность ОБЯЗАТЕЛЬНО ВНИЗУ)
        {
            // Обработай все адреса (если нет удовлетворяющих)
            path: '*',
            component: NotFound,
            name: 'NotFound'
        }
    ]
})