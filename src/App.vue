<template>
  <div class="container">
    <Category title="美食" :listData="games" />
    <Category title="游戏" :listData="foods" />
    <Category title="电影" :listData="films" />
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红警", "英雄联盟", "QQ飞车", "穿越火线"],
      films: [
        "《我不是药神》",
        "《拆弹专家》",
        "《你好,李焕英》",
        "《举起手来》",
      ],
    };
  },
};
</script>
<style lang="css">
.container {
  display: flex;
  justify-content: space-around;
}
</style>

