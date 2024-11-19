<template>
  <main class="home">
    <h1>{{ $t('HOME.TITLE') }}</h1>
    <RouterLink to="/customization">
      <button class="app-dark-button">{{ $t('HOME.ORDER') }}</button>
    </RouterLink>
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
</style>
