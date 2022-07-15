<template>
  <ul>
    <li>news001</li>
    <li>news002</li>
    <li>news003</li>
    <router-link class="list-group-item" active-class="active" to="/home/news/news">我还有孩子</router-link>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "HomeSon"
}
</script>

<style scoped>

</style>