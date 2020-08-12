import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { Locales } from './locales';
import en from './en.json';
import de from './de.json';


const messages = {
  [Locales.EN]: en,
  [Locales.DE]: de,
};

export const defaultLocale = Locales.EN;

Vue.use(VueI18n);

export const i18n = new VueI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});
