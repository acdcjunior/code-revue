export const USERS = 'USERS';

export const GET_USERS = 'GET_USERS';



const state = {
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
