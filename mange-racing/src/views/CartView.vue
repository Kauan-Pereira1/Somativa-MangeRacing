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
                    <th>{{ $t('CART.FRONT_IMAGE') }}</th>
                    <th>{{ $t('CART.MOTOR_IMAGE') }}</th>
                    <th>{{ $t('CART.FRONT_WHEEL_IMAGE') }}</th>
                    <th>{{ $t('CART.REAR_WHEEL_IMAGE') }}</th>
                    <th>{{ $t('CART.TOTAL') }}</th>
                    <th>{{ $t('CART.REMOVE') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="useCart().customizations.length === 0">
                    <td colspan="9">{{ $t('CART.EMPTY') }}</td>
                </tr>
                <tr v-else v-for="(item, index) in useCart().customizations" :key="index">
                    <td>{{ item.color }}</td>
                    <td>{{ item.engine }}</td>
                    <td>{{ item.accessories.join(', ') }}</td>

                    <!-- Exibição das imagens -->
                    <td><img :src="item.frontImage" alt="Frente da moto" width="100" /></td>
                    <td><img :src="item.motorImage" alt="Motor da moto" width="100" /></td>
                    <td><img :src="item.frontWheelImage" alt="Roda da frente" width="100" /></td>
                    <td><img :src="item.rearWheelImage" alt="Roda traseira" width="100" /></td>

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
    text-align: center;
}

img {
    width: 100px; 
    height: auto;
}

button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}
</style>
