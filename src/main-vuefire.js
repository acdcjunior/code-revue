import Vue from "vue";
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire);

firebase.initializeApp({
  projectId: "code-revue",
  databaseURL: "https://code-revue.firebaseio.com"
});

export const db = firebase.firestore();
