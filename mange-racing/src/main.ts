import '@/assets/style/global.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPlugin from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';
import { i18nApplication } from './i18n/i18n';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faWrench, faShoppingCart, faList } from '@fortawesome/free-solid-svg-icons';


library.add(faHome, faWrench, faShoppingCart, faList);


const app = createApp(App);


const pinia = createPinia();
pinia.use(piniaPlugin);
app.use(pinia);


app.use(router);
app.use(i18nApplication);


app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
