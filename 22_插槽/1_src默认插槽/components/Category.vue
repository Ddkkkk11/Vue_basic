<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!--    定义一个插槽 挖个坑 等着组件使用着填充-->
    <slot></slot>
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

/*
  解析完的结构没有样式  在这里添加样式
video {
  width: 100%;
}

img {
  width: 100%;
}*/
</style>