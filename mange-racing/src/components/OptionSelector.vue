<script setup lang="ts">
defineProps({
    options: {
        type: Array as () => string[],
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    modelValue: {
        type: [String, Array],
        default: '',
    },
    multiple: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const value = multiple
        ? Array.from(target.selectedOptions).map((opt) => opt.value)
        : target.value;
    emit('update:modelValue', value);
};
</script>

<template>
    <div class="option-selector">
        <label>
            {{ label }}
            <select :multiple="multiple" @change="updateValue" :value="modelValue">
                <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
        </label>
    </div>
</template>

<style scoped lang="scss">
.option-selector {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

select {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    font-size: 1rem;
}
</style>
