<template>
  <ul>
    <li>ID:{{ $route.params.id }}</li>
    <li>title:{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style scoped>

</style>