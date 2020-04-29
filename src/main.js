import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
//import './assets/img/my.svg'
//import './assets'

//引入svg组件
import SvgIcon from '@/components/SvgIcon.vue'    

//全局注册icon-svg
Vue.component('SvgIcon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')