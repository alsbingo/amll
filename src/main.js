import Vue from 'vue'
import './plugins/element.js'
import App from './App.vue'
import router from './router'
//引入svg组件
import SvgIcon from '@/components/SvgIcon.vue'

import store from './store'

//全局注册icon-svg
Vue.component('SvgIcon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')