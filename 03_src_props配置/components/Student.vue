<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>学生年龄:{{ myAge }}</h2>
    <button @click="changeAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    // console.log(this);
    return {
      msg: "我是一个学生",
      myAge: this.age,
    };
  },
  // 简单声明接受
  props: ['name', 'gender', 'age', 'phone'],
  //接收的同时对数据类型进行限制
  /* props: {
     name: String,
     age: Number,
     gender: String
   },*/
  //接受的同时对类型进行限制+默认值的指定+必要性的限制

  /*props: {
    name: {
      type: String,//name的类型是字符串
      required: true //名字必须得传
    },
    age: {
      type: Number,
      default: 99 //默认值
    },
    gender: {
      type: String, //gender类型是String类型的
      required: true,//gender必传
    }*/

  methods: {
    changeAge() {
      this.myAge++;
    },
  },
};
</script>