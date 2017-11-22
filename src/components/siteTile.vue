<template>
  <div class="tile">
      <a v-bind:href="site.urlData.href">
        {{site.title[0].toUpperCase()}}
      </a>
    <!-- {{site.url}} -->
  </div>
</template>

<script>
  export default {
    name: 'siteTile',
    props: ['site']
  }
</script>

<style>
  .tile {
    background: #eee; 
    height: 120px;
    width: 120px;
  }

  a {
    display: block;
    text-decoration: none;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 70px;
    line-height: 120px;
    font-weight: bold;
    color: #fff;
  }

</style>