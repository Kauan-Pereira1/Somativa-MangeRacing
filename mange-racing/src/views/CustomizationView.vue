<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useCart } from '@/stores/cart';
import { Customization } from '@/models/Customization';

// Opções de personalização
const frontOptions = ['Frente-1', 'Frente-2', 'Frente-3', 'Frente-4', 'Frente-5', 'Frente-6', 'Frente-7'];
const motorOptions = ['Motor-1', 'Motor-2', 'Motor-3', 'Motor-4', 'Motor-5', 'Motor-6', 'Motor-7'];
const frontWheelOptions = ['RodaFrente-1', 'RodaFrente-2', 'RodaFrente-3', 'RodaFrente-4', 'RodaFrente-5', 'RodaFrente-6', 'RodaFrente-7'];
const rearWheelOptions = ['RodaTraseira-1', 'RodaTraseira-2', 'RodaTraseira-3', 'RodaTraseira-4', 'RodaTraseira-5', 'RodaTraseira-6', 'RodaTraseira-7', 'RodaTraseira-8'];

// Criando o objeto de customização com a classe Customization
const customization = reactive(new Customization());

// Função para adicionar ao carrinho
const addCart = () => {
  customization.updateCost(); // Atualiza o custo antes de adicionar
  const cartItem = {
    ...customization,
    frontImage: `/frente/${customization.front}.png`,
    motorImage: `/motor/${customization.motor}.png`,
    frontWheelImage: `/roda-frente/${customization.frontWheel}.png`,
    rearWheelImage: `/roda-traseira/${customization.rearWheel}.png`,
  };

  useCart().addCart(cartItem); // Adiciona o item ao carrinho
  alert('Customização adicionada ao carrinho!');

  // Aguarda 3 segundos e limpa as respostas
  setTimeout(() => {
    customization.color = '';
    customization.engine = '';
    customization.accessories = [];
    customization.front = 'Frente-1';
    customization.motor = 'Motor-1';
    customization.frontWheel = 'RodaFrente-1';
    customization.rearWheel = 'RodaTraseira-1';
    customization.cost = 0;
  }, 3000); // Aguarda 3 segundos
};
</script>

<template>
  <main class="customization">
    <h1>{{ $t('CUSTOMIZATION.TITLE') }}</h1>

    <!-- Cores da Moto -->
    <label>
      {{ $t('CUSTOMIZATION.COLOR') }}
      <select v-model="customization.color">
        <option value="Vermelho">Vermelho</option>
        <option value="Azul">Azul</option>
        <option value="Preto">Preto</option>
        <option value="Laranja">Laranja</option>
        <option value="Roxo">Roxo</option>
        <option value="Verde">Verde</option>
      </select>
    </label>

    <!-- Motor -->
    <label>
      {{ $t('CUSTOMIZATION.ENGINE') }}
      <select v-model="customization.engine">
        <option value="150cc">150cc</option>
        <option value="160cc">160cc</option>
        <option value="300cc">300cc</option>
        <option value="500cc">500cc</option>
        <option value="750cc">750cc</option>
        <option value="1000cc">1000cc</option>
      </select>
    </label>

    <!-- Acessórios -->
    <label>
      {{ $t('CUSTOMIZATION.ACCESSORIES') }}
      <input type="checkbox" value="Alforje" v-model="customization.accessories" /> Alforje
      <input type="checkbox" value="Banco Conforto" v-model="customization.accessories" /> Banco Conforto
    </label>

    <!-- Seleção de Imagens -->
    <section class="images-section">
      <div>
        <label>
          {{ $t('CUSTOMIZATION.FRONT') }}
          <select v-model="customization.front">
            <option v-for="(image, index) in frontOptions" :key="index" :value="image">{{ image }}</option>
          </select>
        </label>
        <img :src="`/frente/${customization.front}.png`" alt="Frente da moto" />
      </div>

      <div>
        <label>
          {{ $t('CUSTOMIZATION.MOTOR') }}
          <select v-model="customization.motor">
            <option v-for="(image, index) in motorOptions" :key="index" :value="image">{{ image }}</option>
          </select>
        </label>
        <img :src="`/motor/${customization.motor}.png`" alt="Motor da moto" />
      </div>

      <div>
        <label>
          {{ $t('CUSTOMIZATION.FRONT_WHEEL') }}
          <select v-model="customization.frontWheel">
            <option v-for="(image, index) in frontWheelOptions" :key="index" :value="image">{{ image }}</option>
          </select>
        </label>
        <img :src="`/roda-frente/${customization.frontWheel}.png`" alt="Roda da frente" />
      </div>

      <div>
        <label>
          {{ $t('CUSTOMIZATION.REAR_WHEEL') }}
          <select v-model="customization.rearWheel">
            <option v-for="(image, index) in rearWheelOptions" :key="index" :value="image">{{ image }}</option>
          </select>
        </label>
        <img :src="`/roda-traseira/${customization.rearWheel}.png`" alt="Roda traseira" />
      </div>
    </section>

    <!-- Botão de Adicionar ao Carrinho -->
    <button @click="addCart" class="app-dark-button">{{ $t('CUSTOMIZATION.ADD_CART') }}</button>
    <p>{{ $t('CUSTOMIZATION.COST') }}: {{ customization.cost }}</p>
  </main>
</template>

<style scoped>
.customization {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin: 1rem 0;
}

select {
  padding: 0.5rem;
  margin-top: 0.5rem;
}

img {
  margin-top: 1rem;
  max-width: 150px;
  height: auto;
}

.images-section > div {
  margin-bottom: 2rem;
  text-align: center;
}

button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
}

p {
  margin-top: 1rem;
  font-weight: bold;
}
</style>
