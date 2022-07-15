<template>
  <ul>
    <li>ID:{{ $route.query.id }}</li>
    <li>title:{{ $route.query.title }}</li>
    <li id="saying">网易云精选评论:{{ $route.query.saying[0].title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
#saying{
  color: orange;
}
</style>