export const COMMENTS = 'COMMENTS';

export const GET_COMMENTS = 'GET_COMMENTS';



const state = {
  comments: {
    commentsleft: {2: "Ball"},
    commentsright: {3: "Rught"},
  }
};

const getters = {
  [GET_COMMENTS]: state => {
    return state.comments;
  }
};


const actions = {
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
