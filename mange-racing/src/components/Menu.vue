<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faWrench, faShoppingCart, faList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { i18nApplication } from '@/i18n/i18n';
import { changeLanguage } from '@/i18n/i18n';

const currentLanguage = ref(i18nApplication.global.locale.value);

const change = () => {
  currentLanguage.value = currentLanguage.value === 'br' ? 'en' : 'br';
  changeLanguage(currentLanguage.value);
};

const flag = computed(() => (currentLanguage.value === 'br' ? 'br.png' : 'en.png'));

const router = useRouter();
const userRole = ref(localStorage.getItem('user'));

// Atualiza o estado do menu em tempo real
watch(userRole, (newValue) => {
  console.log('User role changed:', newValue); // Para depuração
});

const logout = () => {
  localStorage.removeItem('user');
  userRole.value = null;
  router.push('/login'); // Redireciona para a tela de login
};
</script>

<template>
  <header class="menu">
    <nav>
      <RouterLink to="/" class="menu-item">
        <font-awesome-icon :icon="['fas', 'home']" />
        {{ $t('MENU.HOME') }}
      </RouterLink>
      <RouterLink v-if="userRole === 'cliente'" to="/customization" class="menu-item">
        <font-awesome-icon :icon="['fas', 'wrench']" />
        {{ $t('MENU.CUSTOMIZATION') }}
      </RouterLink>
      <RouterLink v-if="userRole === 'cliente'" to="/cart" class="menu-item">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />
        {{ $t('MENU.CART') }}
      </RouterLink>
      <RouterLink v-if="userRole === 'vendedor'" to="/sales" class="menu-item">
        <font-awesome-icon :icon="['fas', 'chart-line']" />
        {{ $t('MENU.SALES') }}
      </RouterLink>
      <RouterLink to="/categories" class="menu-item">
        <font-awesome-icon :icon="['fas', 'list']" />
        {{ $t('MENU.CATEGORIES') }}
      </RouterLink>
      <button v-if="userRole" @click="logout" class="menu-item">
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        {{ $t('MENU.LOGOUT') }}
      </button>
      <img :src="flag" class="flag-icon" @click="change" alt="flag" />
    </nav>
  </header>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  align-items: center;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--app-dark-text-color);
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: var(--app-accent-color);
  }
}

.flag-icon {
  width: 24px;
  height: 16px;
  margin-left: auto;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
