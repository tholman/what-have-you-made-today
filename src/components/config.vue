<template>
  <div id="config"></div>
</template>

<script>
  import store from '../store/store'

  export default {
    name: 'config',
    store: store,
    methods: {}
  }
</script>

<style>
  #config {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    top: 0px;
    left: 0px;
  }
</style>