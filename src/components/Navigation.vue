<template>
  <div class="navigation">
    <div class="logo">
      <img class="logo__image" alt="qrcg logo" src="../assets/logo-icon-blue.svg">
      <div class="logo__text">
        QR Code Generator
        <span class="logo__text--subtitle">
          {{ currentPlan && currentPlan.label }}
        </span>
      </div>
    </div>
    <div class="options">
      <font-awesome-icon class="options__icon" icon="bell" />
      <font-awesome-icon class="options__icon" icon="question-circle" />
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

const plan = namespace('plan');

@Component
export default class Navigation extends Vue {
  @plan.Getter
  public currentPlan!: PlanType;
}
</script>
