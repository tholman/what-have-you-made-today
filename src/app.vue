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
import API from "./utils/api.js";

import motivator from "./components/motivator.vue";
import siteTiles from "./components/siteTiles.vue";
import config from "./components/config.vue";
import configButton from "./components/configButton.vue";

export default {
  name: "app",
  data: () => {
    return {
      configOpen: false,
      sites: [],
    };
  },
  created: async function () {
    this.sites = await new Promise((resolve) => {
      API.getTopSites(resolve);
    });
  },
  methods: {
    setConfigOpen(value) {
      this.configOpen = value;
    },
    setSite(values) {
      const { index, field, value } = values;
      this.sites[index][field] = value;
      API.saveTopSites(this.sites);
    },
  },
  components: {
    motivator: motivator,
    siteTiles: siteTiles,
    configButton: configButton,
    config: config,
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
