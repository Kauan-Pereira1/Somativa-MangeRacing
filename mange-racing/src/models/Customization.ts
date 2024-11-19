export class Customization {
    color: string = '';
    engine: string = '';
    accessories: string[] = [];
    cost: number = 0.0;

    updateCost() {
        const engineCost =
            this.engine === '750cc' ? 2000 : this.engine === '1000cc' ? 4000 : 0;
        const accessoriesCost = this.accessories.length * 300;

        this.cost = 5000 + engineCost + accessoriesCost;
    }
}
