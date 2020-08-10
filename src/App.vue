<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Navigation from './components/Navigation.vue';

@Component({
  components: {
    navigation: Navigation,
  },
})
export default class App extends Vue {

}
</script>
