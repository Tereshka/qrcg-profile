import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import axios from 'axios';

import { UserType, StatisticsType } from '../types/UserType';

@Module({ namespaced: true, name: 'user' })
class User extends VuexModule {

  public user: UserType|undefined = undefined;
  public statistics: StatisticsType|undefined = undefined;

  @Mutation
  public setUser(user: UserType): void {
    this.user = user;
  }

  @Mutation
  public setStatistics(statistics: StatisticsType): void {
    this.statistics = statistics;
  }
  // @Action
  // public getUser(id: number): UserType {
  //   console.log('store!');
  //   const data = axios.get(`${this.context.rootState.apiPath}/user?id=${id}`);
  //   return data;
  //   this.context.commit('setUser', user);
  // }
}
export default User;