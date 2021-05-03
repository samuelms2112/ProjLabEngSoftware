import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Fornecedor from './components/Fornecedor.vue'
import Cliente from './components/Cliente.vue'

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
        }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')