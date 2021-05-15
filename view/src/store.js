import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

//init store
export const store = new Vuex.Store({
    state: {
        globalError: '',
        user: {
            authenticated: false
        }
     },
     mutations: {
         setGlobalError (state, error) {
             state.globalError = error
         }
     }
})