<template>
  <div class="profile-title">
    <div class="profile-title__text">
      {{ user && user.profileTitle }}
    </div>
    <div class="profile-title__edit">
      <span class="profile-title__edit__text">{{ $t('header.edit') }}</span>
      <font-awesome-icon class="profile-title__edit__icon" icon="pencil-alt" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { UserType } from '../../types/UserType';

const user = namespace('user');

@Component
export default class ProfileTitle extends Vue {
  @user.State
  public user!: UserType;
}
</script>
