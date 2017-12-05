<template>
  <div id="container">
    <motivator/>
    <siteTiles/>
    <configButton />
  </div>
</template>

<script>
  import motivator from './components/motivator.vue';
  import siteTiles from './components/siteTiles.vue';
  import configButton from './components/configButton.vue';

  export default {
    name: 'app',
    created() {},
    components: {
      'motivator': motivator,
      'siteTiles': siteTiles,
      'configButton': configButton
    }
  }
</script>

<style>
  html, body {
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