import Vue from 'vue';
import firebase from 'firebase';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';

Vue.use(Router)

const router = new Router({
  routes: [
  {
    path: '*',
    redirect:'/Login'
  },
  {
    path: '/',
    redirect:'/Login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }
]});

/* const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) */

router.beforeEach((to,from,next)=>{
  const currentuser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requireAuth);
  if(requiresAuth && !currentuser) next('login');
  else if(!requiresAuth && currentuser) next('home');
  else next()
});


export default router;
