<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Estado reativo para armazenar as credenciais
const username = ref('');
const password = ref('');

// Roteador para redirecionamento após o login
const router = useRouter();

// Usuários criados para os papéis de cliente e vendedor
const users = {
  cliente: [
    { username: 'cliente1', password: '1234' },
    { username: 'cliente2', password: '5678' },
    { username: 'andre', password: 'andre' } // Novo cliente
  ],
  vendedor: [
    { username: 'vendedor1', password: 'abcd' },
    { username: 'vendedor2', password: 'efgh' },
    { username: 'kauan', password: 'kauan' } // Novo vendedor
  ]
};

// Função de login atualizada
const login = () => {
  // Verifica na lista de clientes
  const cliente = users.cliente.find(user => user.username === username.value && user.password === password.value);
  if (cliente) {
    localStorage.setItem('user', 'cliente');
    router.push('/');
    return;
  }

  // Verifica na lista de vendedores
  const vendedor = users.vendedor.find(user => user.username === username.value && user.password === password.value);
  if (vendedor) {
    localStorage.setItem('user', 'vendedor');
    router.push('/');
    return;
  }

  // Se não encontrar o usuário em nenhuma lista
  alert('Usuário ou senha inválidos.');
};
</script>

<template>
  <div class="login-container">
    <h1>{{ $t('LOGIN.TITLE') }}</h1>
    <div class="form-group">
      <label for="username">{{ $t('LOGIN.USERNAME') }}</label>
      <input v-model="username" type="text" id="username" placeholder="Digite seu usuário" />
    </div>
    <div class="form-group">
      <label for="password">{{ $t('LOGIN.PASSWORD') }}</label>
      <input v-model="password" type="password" id="password" placeholder="Digite sua senha" />
    </div>
    <button @click="login" class="app-dark-button">{{ $t('LOGIN.LOGIN') }}</button>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  padding: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
}
</style>
