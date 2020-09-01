<template>
    <div id="app" class="blue-grey lighten-4">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
    import EmptyLayout from "./components/layouts/EmptyLayout";
    import MainLayout from "./components/layouts/MainLayout";
    import messages from "./utils/messages";

    export default {
        name: "App",
        created() {
            this.$store.dispatch('init');
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || 'empty') + '-layout';
            }
        },
        components: {
            EmptyLayout, MainLayout
        }
    }
</script>

<style lang="scss">
    @import '~materialize-css/dist/css/materialize.min.css';
    @import './assets/index.css';
</style>
