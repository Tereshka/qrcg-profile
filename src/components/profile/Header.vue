<template>
  <div class="profile-header">
    <profile-title />
    <router-link v-for="link in links" :key="link.title" :to="{name: link.to}" >
      {{ link.title }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileTitle from './ProfileTitle.vue';

@Component({
  components: {
    'profile-title': ProfileTitle,
  },
})
export default class Header extends Vue {
  get links(): Array<object> {
    return [
      {
        to: 'profle.account',
        title: this.$t('header.account'),
      },
      {
        to: 'profle.settings',
        title: this.$t('header.settings'),
      },
      {
        to: 'profle.user-management',
        title: this.$t('header.userManagement'),
      },
      {
        to: 'profle.white-label',
        title: this.$t('header.whiteLabel'),
      },
      {
        to: 'profle.api-keys',
        title: this.$t('header.apiKeys'),
      },
      {
        to: 'profle.billing',
        title: this.$t('header.billing'),
      },
    ];
  }
}
</script>
