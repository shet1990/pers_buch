import Vue from "vue";

export default {
    mutations: {
        setUserInfo(state, info) {
            Object.assign(this.state.userInfo, info);
        },
        clearUserInfo() {
            this.state.userInfo = {};
        }
    },
    actions: {
        async fetchUserInfo({ commit }) {
            try {
                await Vue.axios.get(`http://${process.env.VUE_APP_API_HOST}/api/v1/user/${this.state.Auth.user_id}`)
                    .then(response => {
                        if(response.data.error)
                            throw response.data.error;

                        commit('setUserInfo', response.data);
                    });
            } catch (e) {
                commit('setError', e);
                throw e;
            }
        },
        async deleteUser({ commit }) {
            try {
                await Vue.axios.delete(`http://${process.env.VUE_APP_API_HOST}/api/v1/user/${this.state.Auth.user_id}`)
                    .then(response => {
                        if(response.data.error)
                            throw response.data.error;

                    });

                localStorage.removeItem("user_id");
                localStorage.removeItem("api_token");
                this.dispatch('init');
            } catch (e) {
                commit('setError', e);
                throw e;
            }
        },
        async updateUser({ commit }, formData) {
            try {
                await Vue.axios.put(`http://${process.env.VUE_APP_API_HOST}/api/v1/user/${this.state.Auth.user_id}`,
                    formData )
                    .then(response => {
                        if(response.data.error)
                            throw response.data.error;

                        commit('setUserInfo', formData);
                    });

            } catch (e) {
                commit('setError', e);
                throw e;
            }
        }
    }
}