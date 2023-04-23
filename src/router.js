import { createRouter, createWebHistory } from "vue-router";

import VPage from '@/views/v-page-view.vue';
import MainPage from '@/views/v-mainpage-view.vue';
import Vform from '@/views/v-form-view.vue';
import vUser from '@/components/v-user.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/page',
            component: VPage
        },
        {
            path: '/MainPage',
            component: MainPage
        },
        {
            path: '/',
            component: Vform
        },
        {
            path: '/user', 
            component: vUser
        },
    ]
})