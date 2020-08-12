import { VuexModule, Module, Mutation,  } from 'vuex-module-decorators';

import { CountryType } from '../types/CountryType';

@Module({ namespaced: true, name: 'plan' })
class Country extends VuexModule {

  public countries: CountryType[] = [];

  @Mutation
  public setCountries(countries: CountryType[]): void {
    this.countries = countries;
  }
  
  get currentCountry() {
    return this.countries.find(el => el.id === +this.context.rootState.user.user.address.country) || null;
  }
}
export default Country;