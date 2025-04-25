import './assets/main.css'
import './assets/tailwind.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
// import { SfButton, SfIcon } from '@storefront-ui/vue';

const app = createApp(App);
const pinia = createPinia();
// app.component('SfButton', SfButton);
// app.component('SfIcon', SfIcon);
app.use(router);
pinia.use(createPersistedState({
    storage: sessionStorage
}));
app.use(pinia).mount('#app');



