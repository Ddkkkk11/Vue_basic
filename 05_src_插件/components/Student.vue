<template>
  <div>
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <!--    <input type="text" v-f-bind="num">-->
    <!--    <input type="text" v-big="num">-->
    <button @click="hello">点我测试一下hello方法</button>
    <button @click="sayThis">点我输出this</button>
    <button>asd</button>
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
  },
  methods: {
    sayThis() {
      console.log(this.hello)
    }
  }
};
</script>