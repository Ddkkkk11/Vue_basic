<template>
  <div>
    <Student name="xdd" gender="男" :age="20"></Student>
    <Student name="asd" gender="女" :age="23"></Student>
    <Student name="zxc" gender="男女" :age="26"></Student>
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: "App",
  components: { Student },
  data() {
    return {
      msg: "我能行",
    };
  },
  methods: {
    showDom() {
      alert(this.name);
    },
  },
};
</script>
