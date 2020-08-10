import { Locales } from './locales';
import en from './en.json';
import es from './es.json';

export const messages = {
  [Locales.EN]: en,
  [Locales.ES]: es,
};

export const defaultLocale = Locales.EN;