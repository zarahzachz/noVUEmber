<template>
  <div>
    <div v-for="(fart, i) in farts"
        v-bind:key="fart.id">
      <button v-on:click="play(i)">Pull my finger</button>
      <audio :num="i">
        <!-- <source :src="fart.asset" type="audio/mp3"> -->
        <source src="../assets/long_fart.mp3" type="audio/mp3">
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FartMachine',
  data() {
    return {
      farts: [{
        asset: '../assets/long_fart.mp3',
      }, {
        asset: '../assets/short_fart.mp3',
      }],
    };
  },
  methods: {
    play: function play(i) {
      const fart = document.body.querySelector(`audio[num="${i}"`);
      fart.currentTime = 0;
      fart.play();
    },
  },
};
</script>

<style scoped>

</style>
