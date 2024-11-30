<template>
  <main class="home">
    <h1>{{ $t('HOME.TITLE') }}</h1>
    
    <!-- Botão para redirecionar para a página de customização -->
    <RouterLink to="/customization">
      <button class="app-dark-button">{{ $t('HOME.ORDER') }}</button>
    </RouterLink>

    <div class="moto-image-section">
      <img src="/eu-de-moto.jpg" alt="Eu de moto" class="moto-image" />
    </div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.app-dark-button {
  height: 3.2rem;
  width: 20rem;
  border-radius: 2.5rem;
  font-weight: bold;
  background-color: var(--app-footer-background);
  color: white;
}

/* Estilo da imagem "Eu de moto" */
.moto-image-section {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem; /* Espaço entre o título e a imagem */
}

.moto-image {
  width: 100%; /* Garante que a imagem ocupe o tamanho máximo possível */
  max-width: 900px; /* Ajuste do tamanho máximo da imagem */
  height: auto; /* Mantém a proporção da imagem */
  object-fit: cover; /* Faz a imagem cobrir completamente o espaço disponível */
}
</style>
