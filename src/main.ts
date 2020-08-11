import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { messages, defaultLocale } from "@/i18n";

import router from './router';
import store from './store';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faQuestionCircle,
  faUser,
  faPencilAlt,
  faSave,
  faTimes,
  faBriefcase,
  faStore,
  faHandHoldingHeart,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/less/index.less';

Vue.use(VueI18n);
const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

library.add(
  faBell,
  faQuestionCircle,
  faUser,
  faPencilAlt,
  faSave,
  faTimes,
  faBriefcase,
  faStore,
  faHandHoldingHeart,
  faGraduationCap,
);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
