import './assets/main.css'
import './assets/tailwind.css';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { SfButton, SfIcon } from '@storefront-ui/vue';

const app = createApp(App);
// app.component('SfButton', SfButton);
// app.component('SfIcon', SfIcon);
app.use(router);
app.mount('#app');



