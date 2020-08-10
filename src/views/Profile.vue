<template>
  <div class="profile">
    <profile-header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/profile/Header.vue';

@Component({
  components: {
    'profile-header': Header,
  },
})
export default class Profile extends Vue {
}
</script>
