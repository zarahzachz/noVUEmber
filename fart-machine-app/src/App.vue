<template>
  <div id="app">
    <div v-for="(fart, i) in farts" v-bind:key="fart.id">
      <button v-on:click="play(i)">Pull my finger</button>
      <audio :num="i">
        <source :src="fart.asset" type="audio/mp3">
      </audio>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      farts: [{
        asset: '/static/media/long_fart.55ac2ac.mp3',
      }, {
        asset: '/static/media/short_fart.1b46500.mp3',
      }],
    };
  },
  methods: {
    play: function (i) {
      const fart = document.body.querySelector(`audio[num="${i}"`);
      fart.currentTime = 0;
      fart.play();
    },
  },
};
</script>

<style>
</style>
