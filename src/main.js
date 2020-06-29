import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

Vue.filter('prettyDate', value => {
  if (value.length >= 'YYYYMMDD_HHmmSS'.length) {
    let year = value.substring(0,4)
    let month = value.substring(4,6)
    let day = value.substring(6,8)
    let hours = value.substring(9,11)
    let minutes = value.substring(11,13)
    let seconds = value.substring(13,15)
    return year +'/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds
  }
  return value
  
})

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
