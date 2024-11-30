<script setup lang="ts">
import { ref } from 'vue';

const salesRequests = ref([
  { id: 1, customer: 'João', item: 'Moto Customizada 1', status: 'Aguardando' },
  { id: 2, customer: 'Maria', item: 'Moto Customizada 2', status: 'Finalizada' },
]);
</script>

<template>
  <main class="sales">
    <h1>Solicitações de Vendas</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Item</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in salesRequests" :key="request.id">
          <td>{{ request.id }}</td>
          <td>{{ request.customer }}</td>
          <td>{{ request.item }}</td>
          <td>{{ request.status }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
.sales {
  padding: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: left;
}
</style>
