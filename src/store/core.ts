import { VuexModule, Module, Mutation,  } from 'vuex-module-decorators';


import { Locales } from '@/i18n/locales';
import { defaultLocale, i18n } from '@/i18n';

@Module({ namespaced: true, name: 'core' })
class Core extends VuexModule {

  public language = defaultLocale;

  @Mutation
  public setLanguage(locale: Locales): void {
    this.language = locale;
    i18n.locale = locale;
    // localStorage.setItem('language', locale);
  }
}
export default Core;