import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '/src/components/views/user/PgLogin.vue';
import Criar from '/src/components/views/user/CriarConta.vue';

const routes = [{
        path: '/entrar',
        component: Login
    },
    {
        path: '/criar',
        component: Criar
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router