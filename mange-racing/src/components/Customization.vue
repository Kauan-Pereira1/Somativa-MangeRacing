<script>
export default {
  name: "Customization",
  data() {
    return {
      // Imagens disponíveis com caminhos relativos a partir da pasta public
      frenteImages: [
        "/frente/Frente-1.png",
        "/frente/Frente-2.png",
        "/frente/Frente-3.png",
        "/frente/Frente-4.png",
        "/frente/Frente-5.png",
        "/frente/Frente-6.png",
        "/frente/Frente-7.png",
      ],
      motorImages: [
        "/motor/Motor-1.png",
        "/motor/Motor-2.png",
        "/motor/Motor-3.png",
        "/motor/Motor-4.png",
        "/motor/Motor-5.png",
        "/motor/Motor-6.png",
        "/motor/Motor-7.png",
      ],
      rodaFrenteImages: [
        "/roda-frente/RodaFrente-1.png",
        "/roda-frente/RodaFrente-2.png",
        "/roda-frente/RodaFrente-3.png",
        "/roda-frente/RodaFrente-4.png",
        "/roda-frente/RodaFrente-5.png",
        "/roda-frente/RodaFrente-6.png",
        "/roda-frente/RodaFrente-7.png",
      ],
      rodaTraseiraImages: [
        "/roda-traseira/RodaTraseira-1.png",
        "/roda-traseira/RodaTraseira-2.png",
        "/roda-traseira/RodaTraseira-3.jpg",
        "/roda-traseira/RodaTraseira-4.png",
        "/roda-traseira/RodaTraseira-5.png",
        "/roda-traseira/RodaTraseira-6.png",
        "/roda-traseira/RodaTraseira-7.png",
        "/roda-traseira/RodaTraseira-8.png",
      ],

      // Imagem selecionada para cada parte
      selectedFrente: "/frente/Frente-1.png",
      selectedMotor: "/motor/Motor-1.png",
      selectedRodaFrente: "/roda-frente/RodaFrente-1.png",
      selectedRodaTraseira: "/roda-traseira/RodaTraseira-1.png",
    };
  },
};
</script>

<template>
    <div class="customization">
      <h1>Personalização da Moto</h1>
      <div class="customization-section">
        <!-- Seleção da Frente -->
        <h2>Frente</h2>
        <select v-model="selectedFrente">
          <option v-for="(image, index) in frenteImages" :key="index" :value="image">
            Frente {{ index + 1 }}
          </option>
        </select>
        <img :src="selectedFrente" alt="Frente da Moto" />
  
        <!-- Seleção do Motor -->
        <h2>Motor</h2>
        <select v-model="selectedMotor">
          <option v-for="(image, index) in motorImages" :key="index" :value="image">
            Motor {{ index + 1 }}
          </option>
        </select>
        <img :src="selectedMotor" alt="Motor da Moto" />
  
        <!-- Seleção da Roda da Frente -->
        <h2>Roda da Frente</h2>
        <select v-model="selectedRodaFrente">
          <option v-for="(image, index) in rodaFrenteImages" :key="index" :value="image">
            Roda Frente {{ index + 1 }}
          </option>
        </select>
        <img :src="selectedRodaFrente" alt="Roda da Frente da Moto" />
  
        <!-- Seleção da Roda Traseira -->
        <h2>Roda Traseira</h2>
        <select v-model="selectedRodaTraseira">
          <option v-for="(image, index) in rodaTraseiraImages" :key="index" :value="image">
            Roda Traseira {{ index + 1 }}
          </option>
        </select>
        <img :src="selectedRodaTraseira" alt="Roda Traseira da Moto" />
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .customization {
    text-align: center;
  }
  
  .customization-section {
    margin: 20px auto;
  }
  
  h2 {
    margin: 10px 0;
  }
  
  img {
    width: 200px;
    height: auto;
    margin-bottom: 10px;
  }
  
  select {
    margin-bottom: 20px;
  }
  </style>
  