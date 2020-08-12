## Account page for QR-Code Generator [Live Demo](https://tereshka.github.io/qrcg-profile)

## Main purpose:
Code the user account page for the QR Code App. Design was provided by screenshot

## Stack of technologies:
Vue.js, Vuex, Vue-router, TypeScript, i18n, Less, axios.

## Features:
- everything is clickable and interactive
- all components and other files are written in TypeScript
- there is no any UI kit, just manual written less-styles, components are placed mostly by flex
- `/assets` contains fonts from requirements, images and less folder
- `/services` are for working with api endpoints
- `/store` is a vuex store
- `/types` are for main entities, simular to loaded data
- `/views` contains main views for combining different components
- `/components` are for common use, for Account/Profile section, and main
- notification is my custom-made component, very simple and useful
- tab selection changes current route
- data is loading from db.json hosted by my-json-server; for loading data from another user just hover on Account in nav-menu and select "Change user"
- support of 2 languages: English and German (sorry, googletranslated it); to change locale choose "Change to XX" in Account sub-menu
- you can change main editor title, user's contact information, user's working sphere
- there is a simple fields validation

## Project scripts:

`npm install` - install nodes

`npm run serve` - compiles and hot-reloads for development

`npm run build` - compiles and minifies for production

`npm run deploy` - github deployment
