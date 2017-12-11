<template>
  <div id="config">
    <div class="site-config">
      <ul>
        <li v-for="(site, index) in $store.state.sites">
          <input class="text-character" type="text" :value="site.character" @change="updateSite(index, 'character',  $event.target.value)" placeholder="A" aria-label="Character that appears on the speed dial item">
          <input class="text-title" type="text" :value="site.title" @change="updateSite(index, 'title',  $event.target.value)" placeholder="Site Title" aria-label="Title that appears on the speed dial item">
          <input class="text-url" type="text" :value="site.url" @change="updateSite(index, 'url',  $event.target.value)" placeholder="https://your-url.com" aria-label="The URL of the speed dial item">
          <input class="text-color" type="color" :value="site.color" @change="updateSite(index, 'color',  $event.target.value)" placeholder="Site Color" aria-label="The color the speed dial item">
        </li>
      </ul>
      <button v-on:click="hideConfig" aria-label="Save and Close">Save and Close</button>
    </div>
  </div>
</template>

<script>
  import store from '../store/store'
  let debounce = null;

  export default {
    name: 'config',
    store: store,
    methods: {
      hideConfig() {
        store.dispatch('set_config', false);
      },
      updateSite(index, field, value) {
        // Update debounced, because colors update quick
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          store.dispatch('set_site', {index, field, value});
        }, 100)
      }
    }
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
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
  }

  .site-config {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    background: #fff;
  }

  .site-config ul {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    border: 1px solid #eee;
  }

  .site-config li {
    list-style: none;
    display: flex;
  }

  input {
    font-size: 15px;
    padding: 5px;
    border: 1px solid #f1f1f1;
    color: #555;
  }

  .text-character {
    width: 35px;
    text-align: center;
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
    border-radius: 0px;
    margin: auto;
    font-size: 14px;
    margin-top: 14px;
    width: 130px;
    margin-bottom: -2px;
    color: #555;
    cursor: pointer;
  }
</style>