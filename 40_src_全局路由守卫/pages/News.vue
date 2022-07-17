<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
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
  data() {
    return {
      opacity: 1
    }
  },
  activated() {
    this.timer =
        setInterval(() => {
          console.log('@')
          this.opacity -= 0.01;
          if (this.opacity <= 0) this.opacity = 1;
        }, 16);
    console.log('News被激活了')
  },
  deactivated() {
    console.log('没有被激活')
    clearInterval(this.timer);
  }
  /*  mounted() {
      this.timer =
          setInterval(() => {
            console.log('@')
            this.opacity -= 0.01;
            if (this.opacity <= 0) this.opacity = 1;
          }, 16);
    },*/
  /* beforeDestroy() {
     clearInterval(this.timer);
     console.log('news组件即将被销毁了,timer定时器被关了')
   }*/
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>