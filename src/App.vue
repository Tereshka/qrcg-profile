<template>
  <div id="app">
    <navigation />
    <router-view />
    <notification />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Navigation from '@/components/Navigation.vue';
import Notification from '@/components/Notification.vue';

@Component({
  components: {
    navigation: Navigation,
    notification: Notification,
  },
})
export default class App extends Vue {

}
</script>
