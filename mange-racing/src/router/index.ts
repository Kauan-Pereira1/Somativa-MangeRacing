import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CustomizationView from '@/views/CustomizationView.vue';
import CartView from '@/views/CartView.vue';
import CategoriesView from '@/views/CategoriesView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import LoginView from '@/views/LoginView.vue';
import SalesView from '@/views/SalesView.vue';

// Função para verificar se o usuário está autenticado
const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('user');
};

// Função para verificar o papel do usuário
const hasRole = (role: string): boolean => {
  return localStorage.getItem('user') === role;
};

// Middleware de autenticação
const requireAuth = (role?: string) => (to: any, from: any, next: any) => {
  if (!isAuthenticated()) {
    next('/login');
  } else if (role && !hasRole(role)) {
    next('/'); // Redireciona para home se o usuário não tiver a permissão correta
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/customization',
    name: 'customization',
    component: CustomizationView,
    beforeEnter: requireAuth('cliente'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    beforeEnter: requireAuth('cliente'),
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoriesView,
  },
  {
    path: '/sales',
    name: 'sales',
    component: SalesView,
    beforeEnter: requireAuth('vendedor'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
