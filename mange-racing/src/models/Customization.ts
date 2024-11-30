export class Customization {
    color: string = '';
    engine: string = '';
    accessories: string[] = [];
    front: string = '';
    motor: string = '';
    frontWheel: string = '';
    rearWheel: string = '';
    cost: number = 0;

    frontImage: string = '';
    motorImage: string = '';
    frontWheelImage: string = '';
    rearWheelImage: string = '';

    // Atualiza o custo com base na personalização
    updateCost() {
        this.cost = this.accessories.length * 300 + (this.engine === '750cc' ? 2000 : 0);
    }
}
