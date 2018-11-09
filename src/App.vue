<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>#noVUEmber</h1>
    <ol>
      <li>
        <router-link to="/hello-world">Hello World</router-link>
      </li>
      <li>
        <router-link to="/rainbow-button">Rainbow Button</router-link>
      </li>
      <li>
        <router-link to="/todo-app">Todo App</router-link>
      </li>
      <li>
        <router-link to="/monty-hall">Monty Hall Game</router-link>
      </li>
      <li>
        <router-link to="/fart-machine">Fart Machine</router-link>
      </li>
      <li>
        <router-link to="/rolling-ball">Rolling Ball</router-link>
      </li>
    </ol>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
