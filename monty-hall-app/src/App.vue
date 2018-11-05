<template>
  <div id="app">
    <div>
      <p>Welcome to Monty Hall! Choose a door to collect your prize!</p>
      <p>You have {{ guessCounter }} guesses remaining.</p>
    </div>
    <div v-for="(door, index) in doors" v-bind:key="door.id">
      <div v-if="door.opened === true">{{ door.name }} - Opened</div>
      <div href="" v-else v-on:click="openDoor(index)">{{ door.name }} - Closed</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      guessCounter: 2,
      doors: [{
        name: 'Door #1',
        opened: false,
        prize: true,
      }, {
        name: 'Door #2',
        opened: false,
        prize: false,
      }, {
        name: 'Door #3',
        opened: false,
        prize: false,
      }],
    };
  },
  methods: {
    openDoor: function (index) {
      if (this.guessCounter > 0) {
        // if opened = false, change to true
        this.doors[index].opened = true;
        this.guessCounter -= 1;

        // if prize = false, show text saying '1 more attempt'
        if (this.doors[index].prize === false) {
          if (this.guessCounter >= 1) {
            alert(this.guessCounter + ' more guess...');
          } else {
            // if prize = false, play womp womp music
            alert('You lose!');
          }
        } else {
          // if prize = true, show balloons/confetti up page + cheer sounds
          alert('You win!');
        }
      }
    },
  },
};
</script>

<style>
</style>
