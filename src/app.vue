<template>
  <div id="container" :style="{ background: backContain }">
    <motivator/>
    <siteTiles/>
    <configButton/>

    <template v-if="$store.state.config">
      <config/>
    </template>
  </div>
</template>

<script>
import motivator from "./components/motivator.vue";
import siteTiles from "./components/siteTiles.vue";
import config from "./components/config.vue";
import configButton from "./components/configButton.vue";

import store from "./store/store.js";

export default {
  name: "app",
  store: store,
  components: {
    motivator,
    siteTiles,
    configButton,
    config
  },
  data: function() {
    return {
      backContain: ""
    };
  },
  mounted() {
    const hour = new Date().getHours();
    this.backContain = hour < 18 && hour > 6
      ? "linear-gradient(to left bottom, #007500, #FFEE58) 100%"
      : '0 / 400px url("https://dreamity.netlify.com/back-profile.3ae8b1e687a3f38e437a.svg") #191c4c';
  }
};
</script>

<style>
html,
body {
  font-family: Raleway, Roboto, "Helvetica Neue", Arial, sans-serif;
  height: 100%;
  margin: 0px;
  background: #191c4c;
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
