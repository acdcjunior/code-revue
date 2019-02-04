import {db} from "../../main-vuefire";
import {firebaseAction} from "vuexfire";

export const COMMENTS = 'COMMENTS';

export const MENTIONS = 'MENTIONS';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_MENTIONS = 'GET_MENTIONS';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_MENTIONS = 'FETCH_MENTIONS';

export const GET_COMMENTS_OLD = 'GET_COMMENTS_OLD';

const state = {
  [COMMENTS]: [],
  [MENTIONS]: []
};

const getters = {
  [GET_COMMENTS]: state => {
    return state[COMMENTS];
  },
  [GET_MENTIONS]: state => {
    return state[MENTIONS];
  },

  [GET_COMMENTS_OLD]: () => {
    return {
      commentsleft: {2: "Ball"},
      commentsright: {5: "Rught"},
    }
  }
};


const actions = {
  [FETCH_COMMENTS]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef(COMMENTS, db.collection('comments'))
  }),
  [FETCH_MENTIONS]: firebaseAction(({ bindFirebaseRef }, uid) => {
    bindFirebaseRef(MENTIONS, db.collection('comments').where("mentions", "array-contains", uid))
  }),
};


const mutations = {
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
