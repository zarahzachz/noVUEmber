<template>
  <div>
    <p>Welcome to Monty Hall! Choose a door to collect your prize!</p>
    <p>You have {{ guessCounter }} guesses remaining.</p>
    <div v-for="(door, index) in doors" v-bind:key="door.id">
      <div v-if="door.opened === true">{{ door.name }} - Opened</div>
      <div href="" v-else v-on:click="openDoor(index)">{{ door.name }} - Closed</div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  name: 'MontyHallGame',
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
    openDoor: function openDoor(index) {
      if (this.guessCounter > 0) {
        // if opened = false, change to true
        this.doors[index].opened = true;
        this.guessCounter -= 1;

        // if prize = false, show text saying '1 more attempt'
        if (this.doors[index].prize === false) {
          if (this.guessCounter >= 1) {
            swal({
              title: 'Choose wisely...',
              text: `You have ${this.guessCounter} more guess...`,
              icon: 'warning',
            });
          } else {
            // if prize = false, play womp womp music
            swal({
              title: 'You lose!',
              text: 'Better luck next time.',
              icon: 'error',
            });
          }
        } else {
          // if prize = true, show balloons/confetti up page + cheer sounds
          swal({
            title: 'You won!',
            text: 'Aww yiss!',
            icon: 'success',
          });
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
