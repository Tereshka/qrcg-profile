<template>
  <div class="usage">
    <h2>{{ $t('accountSections.usage') }}</h2>
    <div v-if="statistics && currentPlan" class="usage-card-wrapper">
      <usage-card
        v-for="(card, i) in cards"
        :key="`usage-card-${i}`"
        :title="card.title"
        :value="card.value"
        :defaultValue="card.defaultValue"
        :button="card.button"
        @handleButtonClick="card.onclick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import UsageCard from '../common/UsageCard.vue';

import { StatisticsType } from '../../types/UserType';
import { PlanType } from '../../types/PlanType';

import { bus } from '../../main';

const user = namespace('user');
const plan = namespace('plan');

@Component({
  components: {
    'usage-card': UsageCard,
  },
})
export default class Usage extends Vue {
  @user.State
  public statistics!: StatisticsType;

  @plan.Getter
  public currentPlan!: PlanType;

  get cards() {
    return [
      {
        title: this.$t('usage.scans'),
        value: this.statistics.scans,
        defaultValue: this.currentPlan.params.scans,
        button: this.$t('usage.upgrade'),
        onclick: this.handleClickUpgrade,
      },
      {
        title: this.$t('usage.dynamicsCodes'),
        value: this.statistics.dynamicsCodes,
        defaultValue: this.currentPlan.params.dynamicsCodes,
        button: this.$t('usage.upgrade'),
        onclick: this.handleClickUpgrade,
      },
      {
        title: this.$t('usage.staticCodes'),
        value: this.statistics.staticCodes,
        defaultValue: this.currentPlan.params.staticCodes,
        button: this.$t('usage.upgrade'),
        onclick: this.handleClickUpgrade,
      },
      {
        title: this.$t('usage.users'),
        value: this.statistics.users,
        defaultValue: this.currentPlan.params.users,
        button: this.$t('usage.addUsers'),
        onclick: this.handleClicAddUsers,
      },
    ] || [];
  }

  // eslint-disable-next-line class-methods-use-this
  private handleClickUpgrade(): void {
    bus.$emit('onShowNotification', this.$t('notification.upgradeClicked'));
  }

  // eslint-disable-next-line class-methods-use-this
  private handleClicAddUsers(): void {
    bus.$emit('onShowNotification', this.$t('notification.addUsersClicked'));
  }
}
</script>
