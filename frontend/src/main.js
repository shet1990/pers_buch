import Vue from 'vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

import dateFilter from './filters/date.filter';
import currencyFilter from "./filters/currency.filter";
import messagePlugin from './utils/message.plugin';
import Loader from "./components/app/Loader";


Vue.use(messagePlugin);
Vue.use(VueAxios, axios)
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')