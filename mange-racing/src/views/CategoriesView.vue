<script setup lang="ts">
const categories = [
    {
        name: 'Touring',
        description: 'Motos projetadas para longas viagens, com conforto, estabilidade e espaço para bagagens.',
        idealUser: 'Pessoas que amam viajar longas distâncias e buscam conforto em estradas.',
        image: '/Frente-1.png',
    },
    {
        name: 'Custom',
        description: 'Motos com design personalizável, estilo clássico e baixa altura do assento.',
        idealUser: 'Entusiastas de design e estilo, que buscam uma moto única e personalizada.',
        image: '/Frente-2.png',
    },
    {
        name: 'Sport',
        description: 'Motos de alto desempenho com foco em velocidade, aerodinâmica e manobrabilidade.',
        idealUser: 'Amantes de velocidade e adrenalina.',
        image: '/Frente-3.png',
    },
    {
        name: 'Trail',
        description: 'Projetadas para aventuras fora da estrada, com suspensão reforçada e pneus para terrenos acidentados.',
        idealUser: 'Exploradores que gostam de trilhas e terrenos desafiadores.',
        image: '/Frente-4.png',
    },
    {
        name: 'Naked',
        description: 'Motos urbanas, sem carenagens, com design minimalista e manobrabilidade ágil.',
        idealUser: 'Moradores de áreas urbanas que buscam praticidade e estilo.',
        image: '/Frente-5.png',
    },
    {
        name: 'Scooter',
        description: 'Pequenas e práticas, ideais para deslocamentos curtos e economia de combustível.',
        idealUser: 'Pessoas que buscam economia e facilidade no trânsito.',
        image: '/Frente-6.png',
    },
];
</script>

<template>
    <div class="categories">
        <h1>{{ $t('CATEGORIES.TITLE') }}</h1>
        <div class="category-list">
            <div v-for="category in categories" :key="category.name" class="category-card">
                <img :src="category.image" :alt="category.name" />
                <h2>{{ category.name }}</h2>
                <p>{{ category.description }}</p>
                <p><strong>{{ $t('CATEGORIES.USER_IDEAL') }}</strong> {{ category.idealUser }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
