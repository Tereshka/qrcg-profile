<template>
  <div class="information-card-email">
    <div class="information-card-email--col1">
      <div class="information-card__title">{{ title }}</div>
      <div v-if="!isInputVisible" class="information-card__value">{{ value }}</div>
      <input required
        v-if="isInputVisible"
        type="email"
        class="information-card__value"
        v-model="email"
      />
    </div>
    <div class="information-card-email--col2">
      <button
        class="information-card__button"
        @click="handleClickPassword"
      >
        {{ $t('information.password') }}
      </button>
      <button
        v-if="!isInputVisible"
        class="information-card__button"
        @click="isInputVisible = true"
      >
        {{ $t('information.changeEmail') }}
      </button>
      <button
        v-if="isInputVisible"
        class="information-card__button"
        @click="saveEmail"
      >
        {{ $t('information.saveEmail') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { UserType } from '../../types/UserType';
import UserService from '../../services/UserService';

import { bus } from '../../main';

const user = namespace('user');

@Component
export default class InformationCardEmail extends Vue {
  @Prop({ required: false, type: String, default: 'title' }) title!: string;

  @Prop({ required: false, type: String, default: 'value' }) value!: string;

  @user.State
  public user!: UserType;

  @user.Mutation
  public setUser!: (user: UserType) => void;

  private isInputVisible = false;

  private email = this.value;

  @Watch('value')
  onUserProfileTitleChanged(val: string, oldVal: string) {
    this.email = val;
  }

  // eslint-disable-next-line class-methods-use-this
  private handleClickPassword(): void {
    bus.$emit('onShowNotification', this.$t('notification.noPassword'));
  }

  private saveEmail(): void {
    this.isInputVisible = false;

    if (this.email.length === 0 || !this.validateEmail(this.email)) {
      bus.$emit('onShowNotification', this.$t('notification.emailInvalid'));
      this.email = this.value;
      return;
    }

    UserService.patch(this.user.id, { email: this.email })
      .then((res) => {
        this.setUser(res.data);
        bus.$emit('onShowNotification', this.$t('notification.emailUpdated'));
      })
      .catch((e) => {
        bus.$emit('onShowNotification', this.$t('notification.somethingWrong'));
        console.log(e);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  private validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
</script>
