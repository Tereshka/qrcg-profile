<template>
  <div v-if="user" >
    <div v-if="isInputVisible" class="profile-title">
      <input
        type="text"
        v-model="name"
      />
      <div class="profile-title__edit" @click="handleSave">
        <span class="profile-title__edit__text" >{{ $t('header.save') }}</span>
        <font-awesome-icon class="profile-title__edit__icon" icon="save" />
      </div>
      <div  class="profile-title__edit" @click="handleCancel">
        <span class="profile-title__edit__text" >{{ $t('header.cancel') }}</span>
        <font-awesome-icon class="profile-title__edit__icon" icon="times" />
      </div>
    </div>
    <div v-else class="profile-title">
      <div  class="profile-title__text">
        {{ user.profileTitle }}
      </div>
      <div  class="profile-title__edit" @click="handleEdit">
        <span class="profile-title__edit__text" >{{ $t('header.edit') }}</span>
        <font-awesome-icon class="profile-title__edit__icon" icon="pencil-alt" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { UserType } from '../../types/UserType';
import UserService from '../../services/UserService';

import { bus } from '../../main';

const user = namespace('user');

@Component
export default class ProfileTitle extends Vue {
  @user.State
  public user!: UserType;

  @user.Mutation
  public setUser!: (user: UserType) => void;

  private name = '';

  private isInputVisible = false;

  @Watch('user')
  onUserProfileTitleChanged(val: UserType, oldVal: UserType) {
    this.name = val.profileTitle;
  }

  private handleEdit() {
    this.isInputVisible = true;
  }

  private handleCancel() {
    this.isInputVisible = false;
    this.name = this.user.profileTitle;
  }

  private handleSave() {
    this.isInputVisible = false;

    if (this.name.length === 0) {
      this.name = this.user.profileTitle;
      bus.$emit('onShowNotification', this.$t('notification.noEmptyField'));
      return;
    }
    UserService.patch(this.user.id, { profileTitle: this.name })
      .then((res) => {
        this.setUser(res.data);
        bus.$emit('onShowNotification', this.$t('notification.profileUpdated'));
      })
      .catch((e) => {
        bus.$emit('onShowNotification', this.$t('notification.somethingWrong'));
        console.log(e);
      });
  }
}
</script>
