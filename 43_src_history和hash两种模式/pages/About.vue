<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /*beforeDestroy() {
    console.log('About我要被销毁了')
  }*/
  mounted() {
    // console.log('About中的this', this.$route)
  },
  //通过路由规则 进入组件之前被调用
  beforeRouteEnter(to, from, next) {
    console.log('about-------beforeRouteEnter---------------',to,from)
    //判断是否需要校验
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'aku') {
        // document.title = to.meta.title || 'demo';
        next();
      } else {
        alert('您当前无权限查看')
      }
    } else {
      next();
    }
  }
  ,
//通过路由规则 离开组件之前被调用
  beforeRouteLeave(to, from, next) {
    console.log('about------------beforeRouteLeave', to, from)
    next();
  }
}
</script>

<style scoped>

</style>