<script setup lang="ts">
const categories = [
  {
    name: 'Touring',
    description: 'CATEGORIES.TOURING.DESCRIPTION',
    idealUser: 'CATEGORIES.TOURING.IDEAL_USER',
    image: '/Frente-1.png',
  },
  {
    name: 'Custom',
    description: 'CATEGORIES.CUSTOM.DESCRIPTION',
    idealUser: 'CATEGORIES.CUSTOM.IDEAL_USER',
    image: '/Frente-2.png',
  },
  {
    name: 'Sport',
    description: 'CATEGORIES.SPORT.DESCRIPTION',
    idealUser: 'CATEGORIES.SPORT.IDEAL_USER',
    image: '/Frente-3.png',
  },
  {
    name: 'Trail',
    description: 'CATEGORIES.TRAIL.DESCRIPTION',
    idealUser: 'CATEGORIES.TRAIL.IDEAL_USER',
    image: '/Frente-4.png',
  },
  {
    name: 'Naked',
    description: 'CATEGORIES.NAKED.DESCRIPTION',
    idealUser: 'CATEGORIES.NAKED.IDEAL_USER',
    image: '/Frente-5.png',
  },
  {
    name: 'Scooter',
    description: 'CATEGORIES.SCOOTER.DESCRIPTION',
    idealUser: 'CATEGORIES.SCOOTER.IDEAL_USER',
    image: '/Frente-6.png',
  },
];
</script>

<template>
  <div class="categories">
    <h1>{{ $t('CATEGORIES.TITLE') }}</h1>
    <p>{{ $t('CATEGORIES.DESCRIPTION') }}</p>
    <div class="category-list">
      <div v-for="category in categories" :key="category.name" class="category-card">
        <img :src="category.image" :alt="category.name" />
        <h2>{{ category.name }}</h2>
        <p>{{ $t(category.description) }}</p>
        <p><strong>{{ $t('CATEGORIES.USER_IDEAL') }}</strong> {{ $t(category.idealUser) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.categories {
  text-align: center;
  padding: 2rem;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.category-card {
  background-color: var(--app-card-background);
  border-radius: 1rem;
  padding: 1rem;
  width: 300px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.category-card img {
  width: 100%;
  border-radius: 0.5rem;
}

.category-card h2 {
  margin: 0.5rem 0;
  color: var(--app-dark-text-color);
}
</style>
