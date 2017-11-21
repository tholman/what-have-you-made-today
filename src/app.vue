<template>
  <div id="container">
    <motivator/>
  </div>
</template>

<script>
  import motivator from './components/motivator.vue';

  export default {
    name: 'app',
    components: {
      'motivator': motivator
    }
  }

</script>

<style>
  html, body {
    height: 100%;
    margin: 0px;
  }

  #container {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
  }
</style>