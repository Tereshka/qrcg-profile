<template>
  <div class="information">
    <h2>{{ $t('accountSections.information') }}</h2>
    <div class="information-cards" v-if="user">
      <information-card
        v-for="(card, i) in cards"
        :key="i"
        :title="card.title"
        :value="card.value"
      />
    </div>
    <information-card-email v-if="user"
        :title="$t('information.loginEmail')"
        :value="user.email"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import InformationCard from '../common/InformationCard.vue';
import InformationCardEmail from '../common/InformationCardEmail.vue';

import { UserType } from '../../types/UserType';
import { PlanType } from '../../types/PlanType';

const user = namespace('user');
const plan = namespace('plan');

@Component({
  components: {
    'information-card': InformationCard,
    'information-card-email': InformationCardEmail,
  },
})
export default class Information extends Vue {
  @user.State
  public user!: UserType;

  @plan.Getter
  public currentPlan!: PlanType;

  get cards() {
    return [
      {
        title: this.$t('information.customerId'),
        value: this.user.customerId,
      },
      {
        title: this.$t('information.signupDate'),
        value: this.user.signupDate,
      },
      {
        title: this.$t('information.account'),
        value: (this.currentPlan && this.currentPlan.name) || '',
      },
    ] || [];
  }
}
</script>
