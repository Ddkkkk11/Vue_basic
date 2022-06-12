<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <button @click="post">把学生名称给学校</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "xdd",
      gender: "男",
    };
  },

  methods: {
    post() {
      // this.$bus.$emit("hello", this.name);
      pubsub.publish("hello", 666);
    },
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
  },
};
</script>
<style lang="less" scoped>
.student {
  background-color: brown;
  padding: 5px;

  h2 {
    color: #42b983;
    font-size: 50px;
  }
}
</style>