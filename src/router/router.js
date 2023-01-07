import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/news',
    },
    {
        path: '/news',
        component: () => import('@/views/NewsView'),
    },
    {
        path: '/ask',
        component: () => import('@/views/AskView'),
    },
    {
        path: '/jobs',
        component: () => import('@/views/JobsView'),
    },
    {
        path: '/user/:id',
        component: () => import('@/views/UserView'),
    },
    {
        path: '/item/:id',
        component: () => import('@/views/ItemView'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


export default router;