<template>
  <div class="account">
    <user-card />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserCard from '../../components/profile/UserCard.vue';

@Component({
  components: {
    'user-card': UserCard,
  },
})
export default class Account extends Vue {}
</script>
