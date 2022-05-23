<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方的dom元素</button>
    <!-- <img src="./assets/logo.png" alt="" /> -->
    <!-- <Student> </Student> -->
    <School id="sch"></School>
  </div>
</template>
<script>
//引入组件School
import School from "./components/School.vue";
// import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    School,
    // Student,
  },
  data() {
    return {
      msg: "我能行",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.btn); //真实DOM元素 btn
      // console.log(this.$refs.title); //真实DOM元素 h1
      // alert(this.$refs.title);
      // console.log(this.$refs.sch); //sch对于的组件实例对象
      // console.log(this.$refs); // btn h1 还有sch实例对象
      console.log(document.getElementById("sch"));
    },
  },
};
</script>