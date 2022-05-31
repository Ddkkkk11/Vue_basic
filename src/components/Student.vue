<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <button @click="sendSchoolName">点我把学生名称给app</button>
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
    sendSchoolName() {
      //触发Student组件实例身上的xdd 事件
          this.$emit('xdd', this.name,123,123,12,'qweasd','aasd','a','dasd','ad','asd','a','d','asd','ad',123)
    }
  }
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