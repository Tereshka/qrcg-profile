<template>
  <div class="profile">
    <profile-header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import Header from '@/components/profile/Header.vue';

import UserService from '../services/UserService';
import PlanService from '../services/PlanService';
import CountryService from '../services/CountryService';
import { UserType, StatisticsType } from '../types/UserType';
import { PlanType } from '../types/PlanType';
import { CountryType } from '../types/CountryType';

const user = namespace('user');
const plan = namespace('plan');
const country = namespace('country');

@Component({
  components: {
    'profile-header': Header,
  },
})
export default class Profile extends Vue {
  @user.Mutation
  public setUser!: (user: UserType) => void;

  @user.Mutation
  public setStatistics!: (statistics: StatisticsType) => void;

  @plan.Mutation
  public setPlans!: (plans: PlanType[]) => void;

  @country.Mutation
  public setCountries!: (countries: CountryType[]) => void;

  created() {
    this.loadUserData();
  }

  loadUserData() {
    const userId = +this.$route.params.id;
    UserService.get(userId)
      .then((res) => {
        this.setUser(res.data);
        this.loadStatistics(userId);
        this.loadPlanData();
        this.loadCountries();
      })
      .catch((e) => console.log(e));
  }

  loadStatistics(userId: number) {
    UserService.getStatistics(userId)
      .then((res) => {
        const stat: StatisticsType = Object.assign({}, ...res.data);
        this.setStatistics(stat);
      }).catch((e) => console.log(e));
  }

  loadPlanData() {
    PlanService.getAll()
      .then((res) => this.setPlans(res.data))
      .catch((e) => console.log(e));
  }

  loadCountries() {
    CountryService.getAll()
      .then((res) => this.setCountries(res.data))
      .catch((e) => console.log(e));
  }
}
</script>
