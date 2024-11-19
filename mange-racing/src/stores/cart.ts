import { defineStore } from 'pinia';
import { Customization } from '@/models/Customization';

export const useCart = defineStore('moto-cart', {
    state: () => ({
        customizations: [] as Customization[],
    }),
    persist: true,
    actions: {
        addCart(customization: Customization) {
            const deepCopy = JSON.parse(JSON.stringify(customization)) as Customization;
            this.customizations.push(deepCopy);
        },
        removeCart(index: number) {
            if (index <= this.customizations.length - 1) {
                this.customizations.splice(index, 1);
            }
        },
    },
    getters: {
        getTotalCost(): number {
            return this.customizations.reduce((acc, customization) => acc + customization.cost, 0);
        },
    },
});
