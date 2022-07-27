import Vue from 'vue';
import Router from 'vue-router'

// import Dashboard from '../views/Dashboard.vue'
// import About from '../views/About.vue'
// import NotFound from '../views/NotFound.vue'

// import AddPayment from '../components/AddPayment'

Vue.use(Router)

const router = new Router({
    // Убирает # (Настраивает история запросов)
    mode: 'history',
    routes: [
        { 
            // Путь
            path: '/dashboard',
            // Компонент реализации
            // component: Dashboard,
            component: ()=>import(/* webpackChunkName: 'Dashboard' */'../views/Dashboard.vue'),
            // Имя роута (может понадобится в дальнейшем)
            name: 'dashboard'
        },
        { 
            // Не простой путь, а с параметром (:page - это произвольный параметр, который
            // может быть заменён), в данном случае он используется в App.vue, и определяет
            // номер страницы поиска
            path: '/dashboard/:page',
            // Компонент реализации
            // component: Dashboard,
            component: ()=>import(/* webpackChunkName: 'Dashboard' */'../views/Dashboard.vue'),
            // Имя роута (может понадобится в дальнейшем)
            name: 'dashboard'
        },
        {
            // Путь
            path: '/add/payment/:category',
            // Компонент реализации
            // component: AddPayment,
            component: ()=>import(/* webpackChunkName: 'AddPayment' */'../components/AddPayment.vue'),
            // Имя роута (может понадобится в дальнейшем)
            name: 'addPayment'
        },
        { 
            // Путь
            path: '/about',
            // Компонент реализации
            // component: About,
            component: ()=>import(/* webpackChunkName: 'About' */ '../views/About.vue'),
            // Имя роута (может понадобится в дальнейшем)
            name: 'about'
        },
        // Защита от '*', если будет начинаться на about,а заканчиваться чем-либо
        { 
            // Путь
            path: '/about*',
            // Компонент реализации
            // component: About,
            component: ()=>import(/* webpackChunkName: 'About' */ '../views/About.vue'),
            // Имя роута (может понадобится в дальнейшем)
            name: 'about'
        },
        { 
            // Путь
            path: '/add/payment/:category',
            // Компонент реализации
            // component: AddPayment,
            component: ()=>import(/* webpackChunkName: 'AddPayment' */ '../components/AddPayment.vue'),
            // Имя роута (может понадобится в дальнейшем)
            name: 'addPayment'
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
            // component: NotFound,
            component: ()=>import(/* webpackChunkName: 'NotFound' */'../views/NotFound.vue'),
            name: 'NotFound'
        }
    ]
})

// Имитация авторизации
// Если пользователь авторизован, доступ есть
// Если пользователь не авторизован, то доступ закрыт
// Сосотояние до загрузки страницы (доступ)
/*const isAuth = false

router.beforeEach((to, from, next) => {
    if(to.name !== 'NotFound' && !isAuth) {
        next({name: 'NotFound'})
    }else {
        next()
    }
})*/

/*router.beforeResolve((to, from, next) => {

})*/

// Изменение динамически title вкладки
const getTitle = routName => {
    return {
        'dashboard': 'Take a look on your payments and add more!',
        'about': 'Anything about our awesome application!',
        'addPayment': 'adding elements',
        'NotFound': 'Oops! Seems like we lost this page :('
    }[routName]
}

router.afterEach((to) => {
    document.title = getTitle(to.name)
})

export default router