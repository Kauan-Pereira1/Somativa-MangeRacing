import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CustomizationView from '@/views/CustomizationView.vue';
import CartView from '@/views/CartView.vue';
import CategoriesView from '@/views/CategoriesView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/customization', name: 'customization', component: CustomizationView },
    { path: '/cart', name: 'cart', component: CartView },
    { path: '/categories', name: 'categories', component: CategoriesView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
});

export default router;
