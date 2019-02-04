import Vue from 'vue'
import Router from 'vue-router'
import CommitsARevisarView from "./views/CommitsARevisarView";
import OutrosComentariosView from "./views/OutrosComentariosView";
import CommitsView from "./views/CommitsView";
import MencoesView from "./views/MencoesView";
import SingleCommitView from "./views/SingleCommitView";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mencoes',
      component: MencoesView
    },
    {
      path: '/commitsarevisar',
      name: 'CommitsARevisar',
      component: CommitsARevisarView
    },
    {
      path: '/outroscomentarios',
      name: 'OutrosComentarios',
      component: OutrosComentariosView
    },
    {
      path: '/commits',
      name: 'Commits',
      component: CommitsView
    },
    {
      path: '/commits/:sha',
      name: 'singlecommit',
      component: SingleCommitView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})


