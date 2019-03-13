<template>
  <div class="tile" :style="{ background: site.color }" :aria-label="site.title">
    <a :href="site.url">
      {{ site.character }}
      <span class="title">
        {{ site.title }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "siteTile",
  props: ["site"]
};
</script>

<style>
.tile {
  background: rgba(0, 0, 0, 0.1);
  height: 120px;
  width: 120px;
  position: relative;
  transition: transform 100ms ease;
}

.tile:active {
  transform: scale(0.97);
}

a {
  display: block;
  text-decoration: none;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 65px;
  line-height: 100px;
  font-weight: 600;
  text-transform: capitalize;
}

.title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  font-size: 13px;
  height: 25px;
  line-height: 25px;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 5px;
  padding-right: 5px;
  box-sizing: border-box;
  font-weight: 500;
}
</style>
