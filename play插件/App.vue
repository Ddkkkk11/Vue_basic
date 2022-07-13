<template>
  <div>
    <input type="text" v-model="test" @keyup.enter="getSomes" />
    <br />
    <!-- <button @click="getSomes">点我查询买家秀</button> -->
    <div v-show="texts">{{ texts }}</div>
    <!-- <img :src="arr" alt=""  v-show="arr"/> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      texts: "",
      qq: "",
      arr: "",
      test: "",
    };
  },
  methods: {
    getSomes() {
      axios
        .get(`https://api.uomg.com/api/comments.163?mid=${this.test}`)
        .then((response) => {
          // this.texts = response.data.qq;
          this.texts = response.data.data.content;
          console.log(this.texts);
        });
    },
  },
};
</script>
<style lang="css">
img {
  width: 200px;
  height: 200px;
}
</style>
