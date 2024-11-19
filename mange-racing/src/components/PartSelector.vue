<script setup lang="ts">
import { Part } from '@/models/Parts';
import { BASE_URL } from '@/services/services.config';
import { ref } from 'vue';

type PropType = {
    parts: Array<Part>;
    position: 'left' | 'right' | 'center' | 'top' | 'bottom';
};

const props = defineProps<PropType>();

const model = defineModel<Part>();
model.value = new Part();

const selectedIndex = ref(0);

const changePart = (isNext: boolean) => {
    const newIndex = isNext
        ? selectedIndex.value + 1
        : selectedIndex.value - 1;

    if (newIndex < 0) {
        selectedIndex.value = props.parts.length - 1;
    } else if (newIndex > props.parts.length - 1) {
        selectedIndex.value = 0;
    } else {
        selectedIndex.value = newIndex;
    }

    model.value = props.parts[selectedIndex.value];
};
</script>

<template>
    <div :class="`part ${props.position}`" v-if="props.parts[selectedIndex]">
        <img :src="BASE_URL + props.parts[selectedIndex]?.src" alt="" />
        <button @click="changePart(false)" class="prev-selector"></button>
        <button @click="changePart(true)" class="next-selector"></button>
    </div>
</template>

<style scoped lang="scss">
.part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid var(--app-part-border);

    img {
        width: 100%;
        height: 100%;
    }

    button {
        position: absolute;
        z-index: 1;
        width: 25px;
        height: 165px;
    }

    .next-selector {
        right: -28px;
    }

    .prev-selector {
        left: -28px;
    }
}
</style>
