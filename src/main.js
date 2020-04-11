// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWIHW9oco6Iw2fPL1TJ6ry7wrPtzqMXiI",
  authDomain: "online-drinking.firebaseapp.com",
  databaseURL: "https://online-drinking.firebaseio.com",
  projectId: "online-drinking",
  storageBucket: "online-drinking.appspot.com",
  messagingSenderId: "984201402403",
  appId: "1:984201402403:web:c096f4185f8ce0da493996",
  measurementId: "G-LJ1V39CL1T"
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
