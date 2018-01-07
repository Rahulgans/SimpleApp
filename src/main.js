

// import necessary instances

import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

//Creating an instance of VUE 

new Vue({
  el: '#vue-app',
  //injecting the router's configuration
  router,
  template: '<App/>',
  components: { App }
})
