<template>
  <ul>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
    <router-link class="list-group-item" active-class="active" to="/home/news/news">我还有孩子</router-link>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log('news组件即将被销毁了')
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>