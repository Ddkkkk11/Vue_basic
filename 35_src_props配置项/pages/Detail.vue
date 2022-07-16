<template>
  <ul>
    <li>ID:{{ id }}</li>
    <li>Title:{{ title }}</li>
    <!-- <li>School:{{ school }}</li> -->
    <li>Name:{{ name }}</li>
    <!-- <li>Age:{{ age }}</li> -->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title", "name"],
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
</style>