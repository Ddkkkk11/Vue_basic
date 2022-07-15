<template>
  <h2>我是Home组件中的内容</h2>
</template>

<script>
export default {
  name: "Home",
  /* beforeDestroy() {
     console.log('Home组件要被销毁了')
   }*/
  mounted() {
    console.log('Home中的this', this)
    window.hometRoute = this.$route;
    window.hometRouter = this.$router;
  }
}
</script>

<style scoped>

</style>