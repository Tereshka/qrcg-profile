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
import { PlanType } from '../types/PlanType';

const user = namespace('user');
const plan = namespace('plan');

@Component({
  components: {
    'profile-header': Header,
  },
})
export default class Profile extends Vue {
  @user.Mutation
  public setUser!: (id: number) => void;

  @plan.Mutation
  public setPlans!: (plans: PlanType[]) => void;

  created() {
    this.loadUserData();
  }

  loadUserData() {
    UserService.get(+this.$route.params.id)
      .then((res) => {
        this.setUser(res.data);
        this.loadPlanData();
      })
      .catch((e) => console.log(e));
  }

  loadPlanData() {
    PlanService.getAll()
      .then((res) => this.setPlans(res.data))
      .catch((e) => console.log(e));
  }
}
</script>
