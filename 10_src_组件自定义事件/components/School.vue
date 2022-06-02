<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学生地址:{{ address }}</h2>
    <button @click="sayName">点我把学校名称给app</button>
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
  props: ['getSChoolName'],
  methods: {
    sayName() {
      this.getSChoolName(this.name);
      // console.log(this.name)
    },

  }
};
</script>
<style>
.school {
  padding: 15px;
  margin-top: 30px;
  background-color: bisque;
}
</style>