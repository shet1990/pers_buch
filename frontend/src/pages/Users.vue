<template>
    <div>
        <Loader
                v-if="loading"
        />
        <div v-else>
            <div class="page-title">
                <h3>Все пользователи</h3>
            </div>

            <PieCharts
                    :chartdata="chartdata"
                    :options="options"
            />

            <section>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Email</th>
                        <th>Счёт</th>
                        <th>Дата регистрации</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr
                            v-for="(user, i) in users"
                            :key="user.id"
                    >
                        <td>{{ (i + 1) }}</td>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.bill | currency('BYN') }}</td>
                        <td>{{ user.created_at | date('datetime') }}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>

</template>

<script>
    import PieCharts from "../components/PieCharts";

    export default {
        name: "Users",
        components: { PieCharts },
        data: () => ({
            loading: true,
            users: [],
            chartdata: {},
            options: {},
        }),
        async mounted() {
            await this.axios.get(`http://${process.env.VUE_APP_API_HOST}/api/v1/user`)
                .then(response => {
                    this.users = response.data;

                    this.chartdata = {
                        labels: this.users.map(c => c.name),
                        datasets: [
                            {
                                label: 'Счёта пользователей',
                                data: this.users.map(c => c.bill),
                                backgroundColor: [
                                    '#d10606',
                                    '#d17e06',
                                    '#d1c406',
                                    '#61d106',
                                    '#06d159',
                                    '#06d1c9',
                                    '#0668d1',
                                    '#1806d1',
                                    '#8606d1',
                                    '#d106c7',
                                    '#d10660',
                                ],
                            }
                        ]
                    }
                })

            this.loading = false
        }
    }
</script>

<style scoped>

</style>