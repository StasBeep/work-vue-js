import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/auth',
            name: 'Login',
            component: { template: '<form>*AUTH FORM </form>' }
        },
        { 
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
        },
        { 
            path: '/dashboard/:page',
            component: Dashboard,
            name: 'dashboard',
        },
        { 
            path: '/about',
            component: About,
            name: 'about',
        },
        { 
            path: '/about*',
            component: About,
            name: 'about',
        },
        /*{ 
            path: '/notfound',
            component: NotFound,
            name: 'notfound',
        },*/
        { 
            path: '*', 
            component: NotFound,
            name: 'notfound'
        }
    ]
})

const getTitle = routName => {
    return {
        'dashboard' : 'Take a look on your payments and add more!',
        'about' : 'Anything about our awesome application!',
        'notfound' : 'Ooops! Seems like we lost this page :('
    }[routName]
}

router.afterEach((to) => {
    document.title = getTitle(to.name)
})

export default router