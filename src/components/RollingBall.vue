<template>
  <div tab="1" class="scene">
    <p>Use the left or right arrows on your keyboard to move the ball.</p>
    <div class="ball"
        v-bind:style="{ right: ballLeft + 'px', left: ballRight + 'px' }">
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
    };
  },
  methods: {
    moveLeft: function moveLeft() {
      this.ballLeft += 10;
      if (this.ballRight > 0) {
        this.ballRight -= 10;
      }
    },
    moveRight: function moveRight() {
      this.ballRight += 10;
      if (this.ballLeft > 0) {
        this.ballLeft -= 10;
      }
    },
  },
  // mounted() {
  //   this.$el.addEventListener('left', (e) => this.$emit('left', e))
  //   this.$el.addEventListener('right', (e) => this.$emit('right', e))
  // },
  // beforeDestroy() {
  // 	this.$el.removeEventListener('left', (e) => this.$emit('left', e))
  //   this.$el.removeEventListener('right', (e) => this.$emit('right', e))
  //   this.$el.removeListeners()
  // },
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
