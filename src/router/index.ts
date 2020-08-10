import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import App from '../App.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'application.home',
    redirect: '/profile/1/account',
    component: App,
  },
  {
    path: '/profile/:id',
    name: 'application.profile',
    redirect: '/profile/:id/account',
    component: Profile,
    children: [
      {
        path: 'account',
        name: 'profle.account',
        component: () => import('../views/profile/Account.vue'),
      },
      {
        path: 'settings',
        name: 'profle.settings',
        component: () => import('../views/profile/Settings.vue'),
      },
      {
        path: 'user-management',
        name: 'profle.user-management',
        component: () => import('../views/profile/UserManagement.vue'),
      },
      {
        path: 'white-label',
        name: 'profle.white-label',
        component: () => import('../views/profile/WhiteLabel.vue'),
      },
      {
        path: 'api-keys',
        name: 'profle.api-keys',
        component: () => import('../views/profile/ApiKeys.vue'),
      },
      {
        path: 'billing',
        name: 'profle.billing',
        component: () => import('../views/profile/Billing.vue'),
      },
    ],
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
