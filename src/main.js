import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueApexChart from 'vue-apexcharts'

/*import {
  Chart
} from 'chart.js'
import {
  Chartkick
} from 'vue-chartkick'

//Vue.use(Chartkick.use(Chart))
*/
Vue.use(VueApexChart)
Vue.use(Chartkick.use(Chart));
Vue.use(VueFormGenerator)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')