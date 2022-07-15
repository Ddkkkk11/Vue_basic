<template>
  <div>
    <button @click="getStudents">点我获取学生信息</button>
    <br/>
    <button @click="getCars">点我获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/api/students").then(
          (response) => {
            console.log("请求成功", response.data);
          },
          (error) => {
            console.log("请求失败", error.message);
          }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
          (response) => {
            console.log("请求成功", response.data);
          },
          (error) => {
            console.log("请求失败", error.message);
          }
      );
    },
  },
};
</script>