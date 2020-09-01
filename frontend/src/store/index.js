import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import auth from './modules/auth';
import userInfo from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
        async fetchCurrency() {
            const key = process.env.VUE_APP_FIXER;
            const result = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB,BYN`);
            return result.json();
        }
    },
    getters: {
        error: s => s.error
    },
    modules: {
        auth, userInfo
    }
})
