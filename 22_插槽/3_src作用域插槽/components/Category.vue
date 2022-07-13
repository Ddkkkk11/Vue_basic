<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">我是默认的文字哦</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红警", "英雄联盟", "QQ飞车", "穿越火线"],
    };
  },
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