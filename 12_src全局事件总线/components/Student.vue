<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <button @click="post">把学生名称给学校</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "xdd",
      gender: "男",
    };
  },
  mounted() {
    // console.log(this.x);
  },
  methods: {
    post() {
      this.$bus.$emit("hello", this.name);
    },
  },
  beforeDestroy() {
    this.$bus.$off("hello");
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