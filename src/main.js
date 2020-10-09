import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')