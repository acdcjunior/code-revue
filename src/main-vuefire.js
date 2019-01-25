import Vue from "vue";
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire);

firebase.initializeApp({
  projectId: "revue-firestore",
  databaseURL: "https://revue-firestore.firebaseio.com"
});

export const db = firebase.firestore();
