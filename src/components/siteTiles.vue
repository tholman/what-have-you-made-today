<template>
  <div id="siteTiles">
    <ul>
      <li v-for="site in sites">
        <siteTile :site="site" />
      </li>
    </ul>
  </div>
</template>

<script>
import siteTile from "./siteTile.vue";

export default {
  components: { siteTile },
  props: {
    sites: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0px;
  margin-bottom: 0px;
  margin-top: -15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  grid-auto-rows: minmax(100px, auto);
}

#siteTiles {
  width: 400px;
  margin-left: 60px;
}
</style>
