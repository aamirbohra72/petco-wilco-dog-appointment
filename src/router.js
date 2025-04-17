import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import WilcoPetGrooming from './views/WilcoPetGrooming.vue';
import WilcoService from './views/WilcoService.vue';
import Appointment from './views/Appointment.vue';
import Confirm from './views/Confirm.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: WilcoPetGrooming },
  { path: '/service/:productId', name: 'service', component: WilcoService},
  { path: '/appointment/:productId', name: 'appointment', component: Appointment },
  { path: '/confirm', component: Confirm}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;