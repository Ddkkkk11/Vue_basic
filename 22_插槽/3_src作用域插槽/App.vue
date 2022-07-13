<template>
  <div class="container">
    <Category title="游戏">
      <template v-slot=" xdd"
      >
        <!--        {{ xdd }}-->
        <!--        作用域插槽
            template:
            v-slot='name'




        -->
        <ul>
          <li
              v-for="(item, index) in xdd.games"
              :key="index"
          >
            {{ item }}
          </li>
        </ul>

      </template>

    </Category>
    <Category title="游戏">
      <!--      <template scope="{games}">-->
      <template v-slot="{games}">
        <ol>
          <li
              v-for="(item, index) in games"
              :key="index"
          >
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template v-slot="xdd">
        <h4
            v-for="(item, index) in xdd.games"
            :key="index"
        >
          {{ item }}
        </h4>
      </template>

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
    return {}
  }
  ,


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

.foot {
  display: flex;
  justify-content: space-around;
}

.video {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>

