<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学生地址:{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "aku",
      address: "安康",
    };
  },
  mounted() {
    // console.log("School", this.x);
    /*  this.$bus.$on("hello", (data) => {
        console.log("我是hello事件中的回调", data);
      });*/
    this.pubId = pubsub.subscribe("hello", function (msgName, data) {
      console.log("有人发布了消息", data);
      console.log(this); //第三方库里面的this 是undefined 写成箭头函数或者卸载methods上 this就是vc
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>
<style>
.school {
  padding: 15px;
  margin-top: 30px;
  background-color: bisque;
}
</style>