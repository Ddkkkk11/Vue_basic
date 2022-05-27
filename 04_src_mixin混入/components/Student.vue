<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
  </div>
</template>

<script>
// import {mixin, mixin2} from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      msg: '你好',
      name: 'xdd',
      gender: '男',
      x: 1000
    };
  },
  // mixins: [mixin, mixin2]
};
</script>