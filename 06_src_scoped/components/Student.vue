<template>
  <div class="demo">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: 'xdd',
      gender: '男',
      num: 10
    };
  }
};
</script>
<style lang="less" scoped>
.demo {
  background-color: brown;
  h2{
    color: #42b983;
    font-size: 50px;
  }
}

</style>