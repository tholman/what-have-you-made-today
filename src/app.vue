<template>
  <div id="container">
    <motivator />
    <siteTiles :sites="sites" />
    <configButton @set-config-open="setConfigOpen" />

    <template v-if="configOpen">
      <config
        :sites="sites"
        @set-config-open="setConfigOpen"
        @set-site="setSite"
      />
    </template>
  </div>
</template>

<script>
import motivator from "./components/motivator.vue";
import siteTiles from "./components/siteTiles.vue";
import config from "./components/config.vue";
import configButton from "./components/configButton.vue";

import { ref, reactive, unRef, toRefs, onBeforeMount } from "vue";
import API from "./utils/api.js";

export default {
  setup(props, { emit }) {
    const state = reactive({
      sites: [],
      configOpen: false,
    });

    onBeforeMount(async () => {
      state.sites = await new Promise((resolve) => {
        API.getTopSites(resolve);
      });
    });

    const setConfigOpen = (value) => {
      state.configOpen = value;
    };

    const setSite = (values) => {
      const { index, field, value } = values;
      state.sites[index][field] = value;
      API.saveTopSites(state.sites);
    };

    return {
      ...toRefs(state),
      setConfigOpen,
      setSite,
    };
  },
  components: {
    motivator,
    siteTiles,
    configButton,
    config,
  },
};
</script>

<style>
html,
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
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

#app {
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
