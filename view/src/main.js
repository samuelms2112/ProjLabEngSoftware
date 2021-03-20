import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Teste from './components/teste.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/teste',
            component: Teste
        },
        {
            path: '/',
            component: HelloWorld
        }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')