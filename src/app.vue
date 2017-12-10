<template>
  <div id="container">
    <motivator/>
    <siteTiles/>
    <configButton/>

    <template v-if="$store.state.config">
      <config/>
    </template>

  </div>
</template>

<script>
  import motivator from './components/motivator.vue';
  import siteTiles from './components/siteTiles.vue';
  import config from './components/config.vue';
  import configButton from './components/configButton.vue';

  import store from './store/store.js';

  export default {
    name: 'app',
    store: store,
    components: {
      'motivator': motivator,
      'siteTiles': siteTiles,
      'configButton': configButton,
      'config': config
    }
  }
</script>

<style>
  html, body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    height: 100%;
    margin: 0px;
  }

  #container {
    animation: fade-in 600ms ease-out;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>