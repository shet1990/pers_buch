import Vue from 'vue';
import VueRouter from 'vue-router';
import state from "../store/state";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/Categories.vue')
    },
    {
        path: '/history',
        name: 'history',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/History.vue')
    },
    {
        path: '/users',
        name: 'users',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/Users.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/Detail.vue')
    },
    {
        path: '/planning',
        name: 'planning',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/Planning.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/Profile.vue')
    },
    {
        path: '/record',
        name: 'record',
        meta: {layout: 'main', auth: true},
        component: () => import('../pages/Record.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {layout: 'empty'},
        component: () => import('../pages/Register.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.auth);
    //const authUser = state.Auth.login;
    const authUser =  localStorage.getItem("api_token");;

    if(requireAuth && !authUser) {
        next('/login?message=login');
    } else {
        next();
    }
})

export default router
