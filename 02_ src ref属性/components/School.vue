<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showInfo">点我提示学校信息</button>
    <!-- <Student> </Student> -->
  </div>
  <!--    组件的结构-->
</template>
<script >
// import Student from "./Student.vue";
//export 分别暴露
export default {
  // components: { Student },
  name: "School",
  data() {
    return {
      name: "安康AKU",
      address: "安康",
    };
  },
  methods: {
    showInfo() {
      alert(this.name);
    },
  },
};
// export { school }; 统一暴露
// export default school 默认暴露
</script>
<style>
.school {
  background-color: gray;
}
</style>
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
