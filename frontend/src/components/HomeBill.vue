<template>
    <div class="col s12 m6 l4">
        <div
                class="card bill-card"
                v-if="!userInfo.bill"
        >
            <div class="card-content">
                <span class="card-title">У вас нету средств на счету, перейдите в профиль и пополните счёт</span>
                <router-link
                        class="waves-effect waves-light btn-large orange darken-3"
                        to="/profile"
                >
                    Профиль
                </router-link>
            </div>
        </div>
        <div
                v-else
                class="card indigo accent-3 bill-card"
        >
            <div class="card-content white-text">
                <span class="card-title">Счет в валюте</span>

                <p
                        v-for="cur of currencies"
                        :key="cur"
                        class="currency-line"
                >
                    <span>{{ getCurrency(cur) | currency(cur) }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: "HomeBill",
        props: ['rates'],
        data: () => ({

        }),
        computed: {
            ...mapState(["currencies", "userInfo"]),
            base() {
                return this.userInfo.bill / (this.rates['BYN'] / this.rates['EUR']);
            }
        },
        methods: {
            getCurrency(cur) {
                return Math.floor(this.base * this.rates[cur]);
            }
        }
    }
</script>

<style scoped>

</style>