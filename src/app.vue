<template>
  <div id="container">
    <motivator/>
    <siteTiles :sites="sites"/>
  </div>
</template>

<script>
  import motivator from './components/motivator.vue';
  import siteTiles from './components/siteTiles.vue';

  export default {
    name: 'app',
    data: function () {
      return {
        sites: []
      }
    },
    created() {
      chrome.topSites.get(function(results) {

        // Make urls cleaner to read
        for( var i = 0; i < results.length; i++ ) {
          results[i].urlData = new URL(results[i].url);
        }

        // TODO: Apply filters, and custom sites
        this.sites = results.slice(0, 9);

      }.bind(this));
    },
    components: {
      'motivator': motivator,
      'siteTiles': siteTiles
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