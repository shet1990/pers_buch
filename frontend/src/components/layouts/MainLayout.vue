<template>
    <div>
        <Loader v-if="loading" />
        <div v-else class="app-main-layout">

            <Navbar @toggle="isOpen = !isOpen" />

            <Sidebar :value="isOpen" />

            <main class="app-content" :class="{full: !isOpen}">
                <div class="app-page">
                    <router-view></router-view>
                </div>
            </main>

            <!--<div class="fixed-action-btn">
                <router-link class="btn-floating btn-large indigo accent-3 pulse" to="/record">
                    <i class="large material-icons">add</i>
                </router-link>
            </div>-->
        </div>
    </div>
</template>

<script>
    import Navbar from "../app/Navbar";
    import Sidebar from "../app/Sidebar";
    import messages from "../../utils/messages";
    export default {
        name: "MainLayout",
        data: () => ({
            isOpen: true,
            loading: true
        }),
        components: {
            Navbar, Sidebar
        },
        async mounted() {
            if (!Object.keys(this.$store.state.userInfo).length) {
                await this.$store.dispatch('fetchUserInfo');
            }

            this.loading = false;
        },
        computed: {
            error() {
                return this.$store.getters.error;
            }
        },
        watch: {
            error(error) {
                this.$error(messages[error.code] || error.code);
            }
        }
    }
</script>

<style scoped>

</style>
