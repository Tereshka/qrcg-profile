<template>
  <div class="navigation">
    <a class="logo" href="https://www.qr-code-generator.com/free-generator/">
      <div class="logo-card">
        <img class="logo-card__image" alt="qrcg logo" src="../assets/logo-icon-blue.svg">
        <div class="logo-card__text">
            QR Code Generator
            <span class="logo-card__text--subtitle">
              {{ currentPlan && currentPlan.label }}
            </span>
        </div>
      </div>
    </a>
    <div class="options">
      <font-awesome-icon class="options__icon" icon="bell" @click="showNotification" />
      <font-awesome-icon class="options__icon" icon="question-circle" @click="showInformation" />
      <span class="divider" />
      <div class="options__account">
        <button class="options__account__dropdown">
          <font-awesome-icon class="options__icon" icon="user" />
          <span class="options__account__text"> {{$t('header.account')}} </span>
        </button>
        <ul class="options__account__dropdown__content">
          <li @click="changeCurrentUser">{{ $t('header.changeUser') }}</li>
          <li @click="changeLocale">{{ localeText }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { Locales } from '../i18n/locales';
import { PlanType } from '../types/PlanType';

import { bus } from '../main';

const core = namespace('core');
const plan = namespace('plan');

@Component
export default class Navigation extends Vue {
  @plan.Getter
  public currentPlan!: PlanType;

  @core.State
  private language!: Locales;

  @core.Mutation
  public setLanguage!: (locale: Locales) => void;

  get localeText(): string {
    let newLocale = '';
    switch (this.language) {
      case Locales.DE:
        newLocale = Locales.EN;
        break;
      case Locales.EN:
      default:
        newLocale = Locales.DE;
        break;
    }
    return this.$t('header.changeLocale', { locale: newLocale }) as string;
  }

  // eslint-disable-next-line class-methods-use-this
  private showNotification(): void {
    bus.$emit('onShowNotification', this.$t('notification.noNotifications'));
  }

  // eslint-disable-next-line class-methods-use-this
  private showInformation(): void {
    bus.$emit('onShowNotification', this.$t('notification.welcome'));
  }

  private changeCurrentUser(): void {
    this.$router.push({
      name: 'application.profile',
      params: {
        id: this.$route.params.id === '1' ? '2' : '1',
      },
    });
    bus.$emit('onShowNotification', this.$t('notification.userChanged'));
  }

  private changeLocale(): void {
    if (this.language === Locales.EN) {
      this.setLanguage(Locales.DE);
    } else {
      this.setLanguage(Locales.EN);
    }
  }
}
</script>
