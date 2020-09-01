<template>
    <div class="history-chart">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
    import { Pie } from 'vue-chartjs'

    export default {
        name: "PieCharts",
        extends: Pie,
        props: {
            chartdata: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            }
        },
        mounted() {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style scoped lang="scss">
    .history-chart {
        margin-bottom: 80px;
    }
</style>
