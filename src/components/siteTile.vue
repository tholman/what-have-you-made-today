<template>
  <div class="tile" :style="{ background: site.color }" :aria-label="site.title">
    <a :href="site.url" :style="{ color: '#' + getContrasted(site.color) }">
      {{ site.character }}
      <span class="title">
        {{ site.title }}
      </span>
    </a>
  </div>
</template>

<script>
import { contrast, getRgb, genColor, minCon } from 'minimalista';

export default {
  name: "siteTile",
  props: ["site"],
  data: function() {
    return {
      hour: new Date().getHours(),
      min: { contrast, getRgb, genColor, minCon }
    };
  },
  methods: {
    getContrasted: function(bg, color = '191c4c') {
      const mini = this.min;
      // if no bg stored, choice based in hour
      bg = bg === 'transparent' ?
        (this.hour < 18 && this.hour > 6 ?
          '559d16' : 'ae2a91') : bg;
      const contrast = mini.contrast(
        mini.getRgb(bg),
        mini.getRgb(color));
      if (contrast > mini.minCon.aa) {
        return color;
      } else {
        const newColor = mini.genColor(
          mini.getRgb(bg),
          mini.getRgb(color));
        return this.getContrasted(bg, newColor);
      }
    }
  }
};
</script>

<style>
.tile {
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
