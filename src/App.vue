<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import UserService from './services/UserService';
import Navigation from './components/Navigation.vue';

const user = namespace('user');

@Component({
  components: {
    navigation: Navigation,
  },
})
export default class App extends Vue {
  @user.Mutation
  public setUser!: (id: number) => void;

  created() {
    console.log('created');
    UserService.get(1)
      .then((res) => {
        // this.tutorial.id = response.data.id;
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // this.getUser(1);
  }
}
</script>
