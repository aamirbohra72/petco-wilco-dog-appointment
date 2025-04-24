import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import WilcoPetGrooming from './views/WilcoPetGrooming.vue';
import WilcoService from './views/WilcoService.vue';
import Appointment from './views/Appointment.vue';
import Confirm from './views/Confirm.vue';
import Login from './views/Login.vue'
import Signup from './views/Signup.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: WilcoPetGrooming },
  { path: '/service/:productId', name: 'service', component: WilcoService},
  { path: '/appointment', name: 'appointment', component: Appointment },
  { path: '/confirm/:confirmationId', component: Confirm},
  { path: '/login', component: Login},
  { path: '/signup', component: Signup }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;