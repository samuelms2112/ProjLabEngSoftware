import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Fornecedor from './components/Fornecedor.vue'
import Cliente from './components/Cliente.vue'
import InfoCliente from './components/InfoCliente.vue'
import InfoFornecedor from './components/InfoFornecedor.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/cliente',
            component: Cliente
        },
        {
            path: '/fornecedor',
            component: Fornecedor
        },
        {
            path: '/',
            component: Fornecedor
        },
        {
            path: '/cliente/:idCli',
            component: InfoCliente
        },
        {
            path: '/cliente/:idFor',
            component: InfoFornecedor
        },
        {
            path: '/login',
            component: InfoFornecedor
        }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')