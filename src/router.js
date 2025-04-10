import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import WilcoPetGrooming from './views/WilcoPetGrooming.vue';
import WilcoService from './views/WilcoService.vue';
import Appointment from './views/Appointment.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: WilcoPetGrooming },
  { path: '/service', component: WilcoService },
  { path: '/appointment', component: Appointment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;