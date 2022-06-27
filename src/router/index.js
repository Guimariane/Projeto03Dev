import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '/src/components/views/user/PgLogin.vue';
import Criar from '/src/components/views/user/CriarConta.vue';
import Dashboard from '/src/components/views/viewslogado/DashBoard.vue';
import ListaPainel from '/src/components/views/viewslogado/ListaPainel.vue';
import Registro from '/src/components/views/viewslogado/RegistroPainel.vue';
import Mensal from '/src/components/views/viewslogado/GeracaoMensal.vue';

const routes = [{
        path: '/entrar',
        component: Login
    },
    {
        path: '/criar',
        component: Criar
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/lista',
        component: ListaPainel
    },
    {
        path: '/registropainel',
        component: Registro
    },
    {
        path: '/registropainel/:apelido',
        component: Registro
    },
    {
        path: '/geracaomensal',
        component: Mensal
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router