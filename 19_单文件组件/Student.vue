<template>
  <div class="demo">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
  <!--    组件的结构-->
</template>
<script >
//export 分别暴露
export default {
  name: "Student",
  data() {
    return {
      name: "xdd",
      age: 20,
    };
  },
};

// export { school }; 统一暴露
// export default school 默认暴露
</script>
<style>
.demo {
  background-color: #baf;
}
</style>