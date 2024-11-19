<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useCart } from '@/stores/cart';

const customization = reactive({
    color: 'Vermelho',
    engine: '500cc',
    accessories: [],
});

const addCart = () => {
    customization.cost = customization.accessories.length * 300 + (customization.engine === '750cc' ? 2000 : 0);
    useCart().addCart({ ...customization });
    alert('Customização adicionada ao carrinho!');
};
</script>

<template>
    <main class="customization">
        <h1>{{ $t('CUSTOMIZATION.TITLE') }}</h1>
        <label>
            {{ $t('CUSTOMIZATION.COLOR') }}
            <select v-model="customization.color">
                <option value="Vermelho">Vermelho</option>
                <option value="Azul">Azul</option>
                <option value="Preto">Preto</option>
            </select>
        </label>
        <label>
            {{ $t('CUSTOMIZATION.ENGINE') }}
            <select v-model="customization.engine">
                <option value="500cc">500cc</option>
                <option value="750cc">750cc</option>
                <option value="1000cc">1000cc</option>
            </select>
        </label>
        <label>
            {{ $t('CUSTOMIZATION.ACCESSORIES') }}
            <input type="checkbox" value="Alforje" v-model="customization.accessories" /> Alforje
            <input type="checkbox" value="Banco Conforto" v-model="customization.accessories" /> Banco Conforto
        </label>
        <button @click="addCart" class="app-dark-button">{{ $t('CUSTOMIZATION.ADD_CART') }}</button>
    </main>
</template>

<style scoped>
.customization {
    padding: 2rem;
}
</style>
