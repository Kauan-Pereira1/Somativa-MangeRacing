<script setup lang="ts">
import { changeLanguage, i18nApplication } from '@/i18n/i18n';
import { ref, computed } from 'vue';

const currentLanguage = ref(i18nApplication.global.locale.value);

const change = () => {
    currentLanguage.value = currentLanguage.value === 'br' ? 'en' : 'br';
    changeLanguage(currentLanguage.value);
};

const flag = computed(() => (currentLanguage.value === 'br' ? 'br.png' : 'en.png'));
</script>

<template>
    <header class="menu">
        <nav>
            <RouterLink to="/">{{ $t('MENU.HOME') }}</RouterLink>
            <RouterLink to="/customization">{{ $t('MENU.CUSTOMIZATION') }}</RouterLink>
            <RouterLink to="/cart">{{ $t('MENU.CART') }}</RouterLink>
            <RouterLink to="/categories">Categorias</RouterLink>
            <img :src="flag" @click="change" />
        </nav>
    </header>
</template>

<style scoped>
.menu nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
}
</style>
