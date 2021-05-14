import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Fornecedor from './components/Fornecedor.vue'
import Cliente from './components/Cliente.vue'
import InfoCliente from './components/InfoCliente.vue'
import InfoFornecedor from './components/InfoFornecedor.vue'
import LoginComponent from './components/LoginComponent.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/cliente',
            component: Cliente,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/fornecedor',
            component: Fornecedor,
            name: 'Fornecedor',
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/',
            component: LoginComponent,
            name: 'Login',
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/cliente/:idCli',
            component: InfoCliente,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/cliente/:idFor',
            component: InfoFornecedor,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.state.user.authenticated == false) {
            next({ name: 'Login' })
        } else {
            next() // go to wherever I'm going
        }
    } else {
        next() // does not require auth, make sure to always call next()!
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')