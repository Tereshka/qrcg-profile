import Vue from 'vue';
import Vuex from 'vuex';

import Core from './core';
import User from './user';
import Plan from './plan';
import Country from './country';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core: Core,
    user: User,
    plan: Plan,
    country: Country,
  }
});
