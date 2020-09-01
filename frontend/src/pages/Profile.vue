<template>
    <div>
        <div class="page-title">
            <h3>Профиль</h3>
        </div>

        <ProfileUpdate />
        <ProfileDelete />
    </div>
</template>

<script>
    import ProfileUpdate from "../components/ProfileUpdate";
    import ProfileDelete from "../components/ProfileDelete";

    export default {
        name: "Profile",
        components: {
            ProfileDelete, ProfileUpdate
        }
    }
</script>

<style scoped>

</style>