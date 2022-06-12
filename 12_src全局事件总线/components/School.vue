<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学生地址:{{ address }}</h2>
  </div>
</template>

<script>
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
    this.$bus.$on("hello", (data) => {
      console.log("我是hello事件中的回调", data);
    });
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