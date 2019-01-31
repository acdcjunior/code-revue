import {firebaseAction} from "vuexfire";
import {db} from "../../main-vuefire";

export const COMMITS = 'COMMITS';

export const GET_COMMITS = 'GET_COMMITS';
export const FETCH_COMMITS = 'FETCH_COMMITS';


const state = {
    [COMMITS]: []
};

const getters = {
    [GET_COMMITS]: state => {
        return state[COMMITS];
    }
};


const actions = {
    [FETCH_COMMITS]: firebaseAction(({bindFirebaseRef}) => {
        bindFirebaseRef(COMMITS, db.collection('gitlab-commits'))
    }),
};


const mutations = {};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
