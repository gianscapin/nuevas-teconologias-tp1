import Vue from 'vue'
import App from './App.vue'

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { router } from './router';

import './form';

import './usuarios';

import store from './store';

import './globalMixins';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
