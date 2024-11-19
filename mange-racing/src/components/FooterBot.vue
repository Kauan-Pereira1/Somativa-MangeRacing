<script setup lang="ts">
defineProps({
    img: { type: String, required: true },
    text: { type: String, required: true },
});
</script>

<template>
    <div class="flex flex-row align-items-center">
        <img class="mr-2" :src="img" alt="footer bot" />
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
img {
    height: 5rem;
}

p {
    width: 6rem;
    color: white;
}
</style>
