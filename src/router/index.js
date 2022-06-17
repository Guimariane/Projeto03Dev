import { createRouter, createWebHashHistory } from 'vue-router';

import PgLogin from "/src/components/views/user/PgLogin.vue";

const routes = [{
    path: '/login',
    component: PgLogin
}]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router