export const USERS = 'USERS';

export const GET_USER_LOGGED_IN = 'GET_USER_LOGGED_IN';
export const GET_USERS = 'GET_USERS';



const state = {
    user_logged_in: 'antonio',
  users: {
    "acdcjunior": {
      username: "acdcjunior",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
    },
    "alice": {
      username: "alice",
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
    },
    "bob": {
      username: "bob",
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
    }
  }
};

const getters = {
  [GET_USER_LOGGED_IN]: state => {
    return state.user_logged_in;
  },
  [GET_USERS]: state => {
    return state.users;
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
