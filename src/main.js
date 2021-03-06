import Vue from 'vue';
import Antd from 'ant-design-vue';
import vCharts from 'v-charts';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import store from './store';
import './util/eventBus';

Vue.use(Antd);
Vue.use(vCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
