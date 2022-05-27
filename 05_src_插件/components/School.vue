<template>
  <div>
    <h1>学校{{ name |mySlice }}</h1>

    <h2>学校名称:{{ name }}</h2>
    <h2>学生地址:{{ address }}</h2>
    <input type="text" v-f-bind:value="address">
    <button @click="demo">点我测试一下hello方法</button>
    <button @click="hello">点我测试一下hello方法</button>

  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: 'aku11111111111111111111',
      address: '安康'
    };
  },
  methods: {
    demo() {
      this.hello();
    }
  }
};
</script>