<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li
          v-for="(item, index) in listData"
          :key="index"
      >
        {{ item }}
      </li>
      <!--      <h1 v-show="title === '电影'">你好</h1>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
  methods: {
    getSome() {
      // console.log(this.listData);
      // console.log(this);
    },
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}
</style>