<template>
  <div class="tile">
      <a v-bind:href="site.urlData.href">
        {{site.title[0].toUpperCase()}}
        <span class="title">
          {{site.title}}
        </span>
      </a>
      <!-- <img class="icon" :src="site.urlData.origin + '/favicon.ico'"> -->
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
    background: rgba(0,0,0,0.1);
    height: 120px;
    width: 120px;
    position: relative;
  }

  a {
    display: block;
    text-decoration: none;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 70px;
    line-height: 100px;
    font-weight: bold;
    color: #fff;
  }

  .title {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    font-size: 13px;
    height: 25px;
    line-height: 25px;
    background: rgba(0,0,0,0.1);
  }

</style>