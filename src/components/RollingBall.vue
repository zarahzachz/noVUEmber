<template>
  <div tab="1" class="scene">
    <p>Use the left or right arrows on your keyboard to move the ball.</p>
    <div class="ball"
        v-bind:style="{ right: ballLeft + 'px', left: ballRight + 'px', transform: 'rotate('+ spin + 'turn)' }">
      BALL
    </div>
  </div>
</template>

<script>
export default {
  name: 'RollingBall',
  data() {
    return {
      ballLeft: 0,
      ballRight: 0,
      spin: 0,
    };
  },
  created: function moveBall() {
    document.addEventListener('keydown', (event) => {
      // Left arrow
      if (event.keyCode === 37) {
        this.ballLeft += 10;
        this.spin -= 0.25;
        if (this.ballRight > 0) {
          this.ballRight -= 10;
        }
      // Right arrow
      } else if (event.keyCode === 39) {
        this.ballRight += 10;
        this.spin += 0.25;
        if (this.ballLeft > 0) {
          this.ballLeft -= 10;
        }
      }
    });
  },
};
</script>

<style scoped>
  .scene {
    position: relative;
  }

  .ball {
    background-color: seagreen;
    border: 14px solid salmon;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100px;
    transition: all 1s ease 0s;
    width: 100px;
  }
</style>
