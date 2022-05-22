<template>
  <div class="demo">
    <h2>学校名称:{{ schoolName }}</h2>
    <h2>学校地址:{{ schoolAddress }}</h2>
    <button @click="showInfo">点我提示学校信息</button>
  </div>
  <!--    组件的结构-->
</template>
<script >
//export 分别暴露
export default {
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
.demo {
  background-color: #baf;
}
</style>