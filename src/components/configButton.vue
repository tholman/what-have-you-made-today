<template>
  <button id="configButton" v-on:click="showConfig" aria-label="Configure">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" viewBox="0 0 0.753 0.753" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd">
      <path class="fil0" d="M0.668 0.009c0,0 0,0 0,0l-0.068 0.068 0.019 0.057 0.057 0.019 0.068 -0.068c0.009,0.024 0.011,0.051 0.006,0.077 -0.005,0.025 -0.018,0.048 -0.036,0.067 -0.019,0.018 -0.042,0.031 -0.067,0.036 -0.024,0.005 -0.048,0.004 -0.071,-0.004l-0.006 -0.002 -0.311 0.311 0.002 0.006c0.008,0.023 0.009,0.047 0.004,0.071 -0.005,0.025 -0.018,0.048 -0.036,0.067 -0.019,0.018 -0.042,0.031 -0.067,0.036 -0.026,0.005 -0.052,0.003 -0.076,-0.006l-0.001 0 0 0 0.068 -0.068 -0.019 -0.057 -0.057 -0.019 -0.068 0.068c-0.009,-0.024 -0.011,-0.051 -0.006,-0.077 0.005,-0.025 0.018,-0.048 0.036,-0.067 0.019,-0.018 0.042,-0.031 0.067,-0.036 0.024,-0.005 0.048,-0.004 0.071,0.004l0.006 0.002 0.311 -0.311 -0.002 -0.006c-0.008,-0.023 -0.009,-0.047 -0.004,-0.071 0.005,-0.025 0.018,-0.048 0.036,-0.067 0.019,-0.018 0.042,-0.031 0.067,-0.036 0.026,-0.005 0.052,-0.003 0.076,0.006l0.001 0 0 0z"></path>
    </svg>
  </button>
</template>

<script>
  import store from '../store/store'

  export default {
    name: 'configButton',
    methods: {
      showConfig() {
        store.dispatch('set_config', true);
      }
    }
  }
</script>

<style>
  #configButton {
    width: 30px;
    height: 30px;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 100%;
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0.4;
    cursor: pointer;
    outline: 0px;
  }

  #configButton:hover {
    opacity: 0.8;
  }

  #configButton:active {
    opacity: 1;
    border-color: #999;
  }

  #configButton svg {
    fill: #999;
  }
</style>