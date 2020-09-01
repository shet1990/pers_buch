import Vue from "vue";

export default {
    mutations: {
        login() {
            this.state.Auth.user_id = localStorage.getItem("user_id");
            this.state.Auth.api_token = localStorage.getItem("api_token");
            this.state.Auth.login =
                this.state.Auth.user_id !== null &&
                this.state.Auth.api_token !== null;
        }
    },
    actions: {
        init() {
            this.commit("login");
            if (this.state.Auth.api_token) {
                Vue.axios.defaults.headers.common["Authorization"] =
                    "Bearer " + this.state.Auth.api_token;
            }
        },
        async login({ dispatch, commit }, { email, password }) {
            try {
                await Vue.axios.post(
                    `http://${process.env.VUE_APP_API_HOST}/api/v1/login`,
                    {
                        email,
                        password
                    }
                )
                    .then(response => {
                        if(response.data.error)
                            throw response.data.error;

                        localStorage.setItem("user_id", response.data.user.id);
                        localStorage.setItem("api_token", response.data.api_token);
                    });
            } catch (e) {
                commit('setError', e);
                throw e;
            }

            this.dispatch('init');
        },
        async register({ dispatch, commit }, { email, password, name }) {
            try {
                await Vue.axios.get(
                    `http://${process.env.VUE_APP_API_HOST}/api/v1/user/create?email=${email}&password=${password}&name=${name}`
                )
                    .then(response => {
                        if(response.data.error)
                            throw response.data.error;

                        return;
                    });
            } catch (e) {
                commit('setError', e);
                throw e;
            }

            this.dispatch('init');
        },
        async logout({commit}) {
            try {
                await Vue.axios.post(`http://${process.env.VUE_APP_API_HOST}/api/v1/logout`, {
                    name: 'admin',
                    id: 1
                })
                    .then(response => {
                        if(response.data.error)
                            throw response.data.error;

                        commit('clearUserInfo');
                    });
            } catch (e) {
                throw e;
            }

            localStorage.removeItem("user_id");
            localStorage.removeItem("api_token");
            this.dispatch('init');
        }
    }
}
