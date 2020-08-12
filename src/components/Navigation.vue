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
        <font-awesome-icon class="options__icon" icon="user" />
        <span class="options__account__text">Account</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { PlanType } from '../types/PlanType';

import { bus } from '../main';

const plan = namespace('plan');

@Component
export default class Navigation extends Vue {
  @plan.Getter
  public currentPlan!: PlanType;

  // eslint-disable-next-line class-methods-use-this
  private showNotification(): void {
    bus.$emit('onShowNotification', 'Sorry, no notifications to show');
  }

  // eslint-disable-next-line class-methods-use-this
  private showInformation(): void {
    bus.$emit('onShowNotification', 'Welcome!<br>More projects in my <a href="https://github.com/Tereshka" target="_blank">github</a>');
  }
}
</script>
