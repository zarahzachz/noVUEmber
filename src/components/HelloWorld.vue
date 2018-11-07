<template>
  <div>
    <h1>{{ greeting[randomIndex] }}</h1>
    <button v-on:click="getGreeting()">👋</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      randomIndex: 0,
      greeting: [
        'Hello World!',
        '¡Hola Mundo!',
        'مرحبا بالعالم!',
        'Bonjour le monde!',
        'Witaj świecie!',
      ],
    };
  },
  methods: {
    getGreeting: function () {
      this.randomIndex = Math.floor(Math.random() * this.greeting.length);
    },
  },
};
</script>

<style>
</style>
