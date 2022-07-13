<template>
  <div class="container">
    <Category title="美食">
      <img
          src="https://img1.baidu.com/it/u=3879974806,222518212&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1657818000&t=82bf8ca3056af740ce669fc5b95dda37"
          alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li
            v-for="(item, index) in games"
            :key="index"
        >
          {{ item }}
        </li>
      </ul>

    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
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
/* 解析完的结构有样式*/
video {
  width: 100%;
}

img {
  width: 100%;
}
</style>

