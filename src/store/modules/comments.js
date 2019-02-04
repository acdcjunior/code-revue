import {db} from "../../main-vuefire";
import {firebaseAction} from "vuexfire";

export const COMMENTS = 'COMMENTS';

export const MENTIONS = 'MENTIONS';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_MENTIONS = 'GET_MENTIONS';
export const GET_COMMENTS_FOR_COMMIT = 'GET_COMMENTS_FOR_COMMIT';
export const GET_COMMENTS_FOR_COMMIT_DIFF = 'GET_COMMENTS_FOR_COMMIT_DIFF';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_MENTIONS = 'FETCH_MENTIONS';
export const FETCH_COMMENTS_FOR_COMMIT = 'FETCH_COMMENTS_FOR_COMMIT';

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

  [GET_COMMENTS_FOR_COMMIT]: state => {
    return state[COMMENTS].filter(comment => comment.target.type === 'commit');
  },

  [GET_COMMENTS_FOR_COMMIT_DIFF]: state => (diff) => {
    return state[COMMENTS].filter(comment => comment.target.type === 'file' && comment.target.filename === diff.new_path);
  }
};


const actions = {
  [FETCH_COMMENTS]: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef(COMMENTS, db.collection('comments'))
  }),
  [FETCH_MENTIONS]: firebaseAction(({ bindFirebaseRef }, uid) => {
    bindFirebaseRef(MENTIONS, db.collection('comments').where("mentions", "array-contains", uid))
  }),
  [FETCH_COMMENTS_FOR_COMMIT]: firebaseAction(({ bindFirebaseRef }, sha) => {
    bindFirebaseRef(COMMENTS, db.collection('comments').where("sha", "==", sha))
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
