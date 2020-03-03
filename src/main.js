import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

let app = '';
const config = {
  apiKey: "AIzaSyBVgb9za9UlT7-58SDZqKS7mctTZTBH1kA",
  authDomain: "demovueproject.firebaseapp.com",
  databaseURL: "https://demovueproject.firebaseio.com",
  projectId: "demovueproject",
  storageBucket: "demovueproject.appspot.com",
  messagingSenderId: "255944289688",
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
  }
})

