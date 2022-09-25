import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import htmlToPdf from '@/utils/htmlToPdf'

Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(htmlToPdf)

new Vue({
  render: h => h(App),
}).$mount('#app')
