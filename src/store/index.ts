import Vue from 'vue';
import Vuex from 'vuex';

import User from './user';
import Plan from './plan';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: User,
    plan: Plan,
  }
});
