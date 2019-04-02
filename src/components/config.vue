<template>
  <div id="config">
    <div class="site-config">
      <ul>
        <li v-for="(site, index) in $store.state.sites" :key="index">
          <input type="text" class="text-character"
            :value="site.character"
            @change="updateSite(index, 'character',  $event.target.value)"
            placeholder="A"
            aria-label="Character that appears on the speed dial item">
          <input type="text" class="text-title"
            :value="site.title"
            @change="updateSite(index, 'title',  $event.target.value)"
            placeholder="Site Title"
            aria-label="Title that appears on the speed dial item">
          <input type="text" class="text-url"
            :value="site.url"
            @change="updateSite(index, 'url',  $event.target.value)"
            placeholder="https://your-url.com"
            aria-label="The URL of the speed dial item">
          <input type="color" class="text-color"
            :value="site.color"
            @change="updateSite(index, 'color',  $event.target.value)"
            placeholder="Site Color"
            aria-label="The color the speed dial item">
        </li>
      </ul>
      <button @click="hideConfig" aria-label="Save and Close">Save and Close</button>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
let debounce = null;

export default {
  name: "config",
  store: store,
  methods: {
    hideConfig() {
      store.dispatch("set_config", false);
    },
    updateSite(index, field, value) {
      // Update debounced, because colors update quick
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        store.dispatch("set_site", { index, field, value });
      }, 100);
    }
  }
};
</script>

<style>
#config {
  position: fixed;
  width: 55vw;
  height: 100%;
  background: rgba(25, 28, 76, 0.8);
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
}

.site-config {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  margin-left: 15vw;
}

.site-config ul {
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
}

.site-config li {
  list-style: none;
  display: flex;
}

input {
  font-size: 15px;
  padding: 5px;
  border: 1px solid #11154e;
  color: #b1b1b1;
  font-family: inherit;
  background: rgba(25, 28, 76, 0.9);
}

.text-character {
  width: 35px;
  text-align: center;
  font-weight: 600;
  color: aliceblue;
}

.text-title {
  width: 130px;
}

.text-url {
  width: 250px;
}

.text-color {
  width: 35px;
  height: 35px;
  padding: 3px;
}

.site-config button {
  padding: 8px;
  border: 2px solid #eee;
  font-size: 14px;
  margin-top: 14px;
  width: 130px;
  margin-bottom: -2px;
  color: #f7f7f7;
  background: #191c4c;
  cursor: pointer;
}
</style>
