<template>
  <ul>
    <li>ID:{{ $route.query.id }}</li>
    <li>title:{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  /* mounted() {
     console.log(this.$route)
   }*/
}
</script>

<style scoped>

</style>