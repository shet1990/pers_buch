<template>
    <div>
        <Loader v-if="loading"/>
        <form v-else class="form" @submit.prevent="submitHandler">
            <div class="input-field">
                <input
                        id="name"
                        type="text"
                        v-model.trim="name"
                        :class="{ invalid: $v.name.$dirty && !$v.name.required }"
                >
                <label
                        :class="{active: name}"
                        for="name"
                >Имя</label>
                <small
                        class="helper-text invalid"
                        v-if="$v.name.$dirty && !$v.name.required"
                >
                    Введите имя
                </small>
            </div>
            <div class="input-field">
                <input
                        id="bill"
                        type="text"
                        placeholder="Введите счёт"
                        v-model.trim="bill"
                        :class="{ invalid: $v.bill.$dirty && !$v.bill.integer }"
                >
                <label
                        :class="{active: bill}"
                        for="bill"
                >Счёт</label>
                <small
                        class="helper-text invalid"
                        v-if="$v.bill.$dirty && !$v.bill.integer"
                >
                    Введите целое число
                </small>
            </div>

            <button class="btn waves-effect waves-light" type="submit">
                Обновить
                <i class="material-icons right">autorenew</i>
            </button>
        </form>
    </div>
</template>

<script>
    import { required, integer } from 'vuelidate/lib/validators'

    export default {
        name: "ProfileUpdate",
        data: () => ({
            loading: false,
            name: '',
            bill: '',
            email: ''
        }),
        validations: {
            name: { required },
            bill: { integer }
        },
        mounted() {
            this.name = this.$store.state.userInfo.name;
            this.bill = this.$store.state.userInfo.bill;
            this.email = this.$store.state.userInfo.email;
        },
        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return;
                }
                const formData = {
                    name: this.name,
                    bill: this.bill,
                    email: this.email,
                };

                try {
                    this.loading = true;
                    await this.$store.dispatch('updateUser', formData);
                    this.loading = false;
                } catch (e) {}
            }
        }
    }
</script>

<style scoped>

</style>