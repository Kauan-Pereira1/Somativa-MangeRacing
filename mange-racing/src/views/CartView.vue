<script setup lang="ts">
import { useCart } from '@/stores/cart';
</script>

<template>
    <main>
        <h1>{{ $t('CART.TITLE') }}</h1>
        <table>
            <thead>
                <tr>
                    <th>{{ $t('CUSTOMIZATION.COLOR') }}</th>
                    <th>{{ $t('CUSTOMIZATION.ENGINE') }}</th>
                    <th>{{ $t('CUSTOMIZATION.ACCESSORIES') }}</th>
                    <th>{{ $t('CART.TOTAL') }}</th>
                    <th>{{ $t('CART.REMOVE') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="useCart().customizations.length === 0">
                    <td colspan="5">{{ $t('CART.EMPTY') }}</td>
                </tr>
                <tr v-else v-for="(item, index) in useCart().customizations" :key="index">
                    <td>{{ item.color }}</td>
                    <td>{{ item.engine }}</td>
                    <td>{{ item.accessories.join(', ') }}</td>
                    <td>{{ item.cost }}</td>
                    <td>
                        <button @click="useCart().removeCart(index)">{{ $t('CART.REMOVE') }}</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 0.5rem;
}
</style>
