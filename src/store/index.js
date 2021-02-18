import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import todos from './todos'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        error: null
    },
    mutations: {
        SET_ERROR(state, error) {
            state.error = error
        },
        CLEAR_ERROR(state) {
            state.error = null
        }
    },
    getters: {
        error: s => s.error
    },
    modules: {
        auth, info, todos
    }
})