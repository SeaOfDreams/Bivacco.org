/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
/* import moment from 'moment' */
import firebase from 'firebase'
import './components/firebaseInit'

Vue.use(Buefy)

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})


/* 
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
}); */
