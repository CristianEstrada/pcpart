import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBK6TrwH9dyQ_Hl9irx5oHDP11NRCMOLzs",
  authDomain: "pcpart-acaf2.firebaseapp.com",
  databaseURL: "https://pcpart-acaf2.firebaseio.com",
  projectId: "pcpart-acaf2",
  storageBucket: "pcpart-acaf2.appspot.com",
  messagingSenderId: "514712352155",
  appId: "1:514712352155:web:cce779223967b7c7fa1d3e",
  measurementId: "G-S0JFYLNVW1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
