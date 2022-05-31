<template>
  <div class="app">
    <!--    <h1>我是app里面的组件学校的名字是{{ getName() }}</h1>-->
    <!--    <h1 v-text="getName()"> 我是app里面的组件学校的名字是{{ getName() }}</h1>-->
    <h1>{{ msg }}</h1>
    <!--    通过父组件给子组件传递函数子组件把数据传给app -->
    <School :getSChoolName="getSChoolName"></School>
    <hr>
    <!--    通过父组件给子组件绑定一个自定义事件实现：子数据给父传递(第一种写法,使用@或v-on)-->
    <Student v-on:xdd="getStudentName" @demo="m1"></Student>
    <!--    <Student v-on:xdd.once="getStudentName"></Student>-->
    <!--    通过父组件给子组件绑定一个自定义事件实现：子数据给父传递(第一种写法,使用ref this.$refs.student.$on('xdd',getStudentName)-->
    <!--    <Student ref="student"></Student>-->
  </div>
</template>
<script>
//引入组件School
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: '你好'
    }
  },
  methods: {
    getSChoolName(name) {
      console.log("app收到了学校名称是:", name);
      return name;
    },
    getStudentName(name, ...params) {
      console.log("app收到了学生名称是 ", name);
      // console.log(...params);
    },
    m1() {
      console.log('m1被调用')
    }
  },
  mounted() {
    //使用ref 可以延时在绑定自定义事件
    setTimeout(() => {
      // this.$refs.student.$on('xdd', this.getStudentName)//绑定自定义事件
      //只能绑定一次
      // console.log(this.$refs.student.gender)
      // this.$refs.student.$on('xdd', this.getStudentName);//绑定事件只发生一次
    }, 0);
  }
};
</script>
<style>
.app {
  background-color: #cccccc;
  padding: 5px;
}
</style>