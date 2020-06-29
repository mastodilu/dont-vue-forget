import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// initialize the app only once
let initialized = false

firebase.auth().onAuthStateChanged(() => {
  if(!initialized){
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    initialized = true
  }
})
