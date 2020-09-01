<template>
    <div class="delete-wrap">
        <a
                v-if="!isOpen"
                @click.prevent="isOpen = !isOpen"
                class="waves-effect waves-light btn red darken-3"
        >
            Удалить аккаунт
            <i class="material-icons right">arrow_drop_down</i>
        </a>
        <div
                v-if="isOpen"
        >
            <a
                    @click.prevent="isOpen = !isOpen"
                    class="waves-effect waves-light btn red lighten-2"
            >
                Свернуть
                <i class="material-icons right">arrow_drop_up</i>
            </a>
            <form class="form"  @submit.prevent="submitHandler">
                <p>Для удаления аккаунта введите свое имя : <span class="red-text text-darken-2 bold">{{ userInfo.name }}</span></p>
                <div class="input-field">
                    <input
                            id="delete"
                            type="text"
                            v-model.trim="deleteUser"
                            :class="{ invalid: ($v.deleteUser.$dirty && !$v.deleteUser.required) || ($v.deleteUser.$dirty && !$v.deleteUser.sameAsName) }"
                    >
                    <label for="delete">Введите имя</label>
                    <small
                            class="helper-text invalid"
                            v-if="$v.deleteUser.$dirty && !$v.deleteUser.required"
                    >
                        Введите ваше имя для удаления
                    </small>
                    <small
                            class="helper-text invalid"
                            v-else-if="$v.deleteUser.$dirty && !$v.deleteUser.sameAsName"
                    >
                        Имя не совпадает
                    </small>
                </div>

                <button class="btn waves-effect waves-light red darken-3" type="submit">
                    Удалить
                    <i class="material-icons right">delete_forever</i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import { required, sameAs } from 'vuelidate/lib/validators'

    export default {
        name: "ProfileDelete",
        data: () => ({
            isOpen: false,
            name: '',
            deleteUser: ''
        }),
        computed: {
            ...mapState(["userInfo"])
        },
        mounted() {
            this.name = this.$store.state.userInfo.name;
        },
        validations: {
            deleteUser: { required, sameAsName: sameAs('name') }
        },
        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return;
                }

                try {
                    await this.$store.dispatch('deleteUser');
                    this.$router.push('/register?message=delete');
                } catch (e) {}
            }
        },
    }
</script>

<style scoped lang="scss">
    .delete-wrap {
        margin-top: 100px;
    }
</style>
