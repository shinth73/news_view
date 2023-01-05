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
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


export default router;