import { VuexModule, Module, Mutation,  } from 'vuex-module-decorators';

import { PlanType } from '../types/PlanType';

@Module({ namespaced: true, name: 'plan' })
class User extends VuexModule {

  public plans: PlanType[] = [];

  @Mutation
  public setPlans(plans: PlanType[]): void {
    this.plans = plans;
  }
  
  get currentPlan() {
    return this.plans.find(el => el.id === this.context.rootState.user.user.planId) || null;
  }
}
export default User;