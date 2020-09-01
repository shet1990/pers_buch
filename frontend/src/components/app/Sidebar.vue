<template>
    <ul class="sidenav app-sidenav blue-grey darken-2" :class="{open: value}">
        <router-link
                v-for="link in sidebarNav"
                :key="link.url"
                active-class="active"
                tag='li'
                :to="link.url"
                :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
        </router-link>
    </ul>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: "Sidebar",
        props: ['value'],
        computed: {
            ...mapState(["sidebarNav"]),
        }
    }
</script>

<style scoped>
.sidenav
    li>a {
    color: #ffffff;
}
</style>