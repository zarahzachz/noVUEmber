import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import RainbowButton from '@/components/RainbowButton';
import TodoApp from '@/components/TodoApp';
import MontyHallGame from '@/components/MontyHallGame';
import FartMachine from '@/components/FartMachine';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/rainbow-button',
      name: 'RainbowButton',
      component: RainbowButton,
    },
    {
      path: '/todo-app',
      name: 'TodoApp',
      component: TodoApp,
    },
    {
      path: '/monty-hall',
      name: 'MontyHallGame',
      component: MontyHallGame,
    },
    {
      path: '/fart-machine',
      name: 'FartMachine',
      component: FartMachine,
    },
  ],
});
