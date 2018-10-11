import Vue from 'vue';
import 'swiper/dist/css/swiper.min.css'

import App from './App.vue'
import router from './router'
import store from './store'
//import TopHeader from './components/TopHeader/TopHeader.vue'
//注册全局组件
//vue.component('TopHeader',TopHeader)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
