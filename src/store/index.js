import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import commits, { COMMITS } from './modules/commits';
import users, { USERS } from './modules/users';
import diffs, { DIFFS } from './modules/diffs';
import comments, { COMMENTS } from './modules/comments';

export default new Vuex.Store({

  strict: process.env.NODE_ENV !== 'production',

  modules: {
    [COMMITS]: commits,
    [USERS]: users,
    [DIFFS]: diffs,
    [COMMENTS]: comments,
  }

});
