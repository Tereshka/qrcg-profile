<template>
  <div class="account">
    <user-card />
    <div class="account--second-row">
      <usage />
      <sphere />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserCard from '@/components/profile/UserCard.vue';
import Usage from '@/components/profile/Usage.vue';
import Sphere from '@/components/profile/Sphere.vue';

@Component({
  components: {
    'user-card': UserCard,
    usage: Usage,
    sphere: Sphere,
  },
})
export default class Account extends Vue {}
</script>
