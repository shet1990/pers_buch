<template>
    <div class="grey darken-1 empty-layout">
        <router-view></router-view>
    </div>
</template>

<script>
    import messages from "../../utils/messages";

    export default {
        name: "EmptyLayout",
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
