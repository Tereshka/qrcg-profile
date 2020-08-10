<template>
  <div class="user-card">
    <information />
    <contact />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Information from './Information.vue';
import Contact from './Contact.vue';

@Component({
  components: {
    information: Information,
    contact: Contact,
  },
})
export default class UserCard extends Vue {}
</script>
