export const COMMITS = 'COMMITS';

export const GET_COMMITS = 'GET_COMMITS';



const state = {
  commit: {
    "id": "63291ee2d2cf87756c7f0de5fe2a16fc358b59f9",
    "short_id": "63291ee2",
    "title": "Merge branch 'develop' into 'master'",
    "created_at": "2018-03-08T17:52:33.000Z",
    "parent_ids": ["32cee9024be16f43cf2f8cf90271c1be0f468d2e", "00b2cfcd9e28a88edc0dce4c6500c1058464f50d"],
    "message": "Merge branch 'develop' into 'master'\n\nDevelop\n\nCloses #267\n\nSee merge request bawbnelson/frontend!95",
    "author_name": "Lobster Nelson",
    "author_email": "lobsternelson@gmail.com",
    "authored_date": "2018-03-08T17:52:33.000Z",
    "committer_name": "Lobster Nelson",
    "committer_email": "lobsternelson@gmail.com",
    "committed_date": "2018-03-08T17:52:33.000Z",
    "stats": {"additions": 19, "deletions": 0, "total": 19},
    "status": "success",
    "last_pipeline": {
      "id": 18609970,
      "sha": "63291ee2d2cf87756c7f0de5fe2a16fc358b59f9",
      "ref": "master",
      "status": "success",
      "web_url": "https://gitlab.com/bawbnelson/frontend/pipelines/18609970"
    },
    "project_id": 4313567
  }
};

const getters = {
  [GET_COMMITS]: state => {
    return state.commit;
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
