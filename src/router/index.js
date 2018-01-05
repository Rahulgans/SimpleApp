
import Vue from 'vue'
import Router from 'vue-router'

// @ refers TO 'src' directory
import Intro from '@/components/Intro.vue'

import Signup from '@/components/Signup.vue'

// using vue-router plugin
Vue.use(Router)

// creating an instance of Router
export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro

    },
    
    {
    	path : '/signup',
    	name:'signup',
    	component:Signup,

    	//setting props true so that we can get the data passed from another route/view
    	props:true
    }
  ]
})
