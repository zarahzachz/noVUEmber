<template>
  <div id="app">
    <button v-on:click="play()">Pull my finger</button>
    <audio src="./assets/long_fart.mp3"></audio>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    play: function () {
      const audio = document.body.querySelector('audio');
      audio.play();
    },
  },
};
</script>

<style>
</style>
