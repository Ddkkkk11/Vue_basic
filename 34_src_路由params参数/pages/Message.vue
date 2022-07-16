<template>
  <div>
    <ul>
      <li v-for="list in messageList" :key="list.id">
        <!--        </router-link>-->
        <!--        跳转路由并携带query参数 to的对象写法-->
        <!--        <router-link :to="{
                  name:'xiangqing',
                  // path:'/home/message/detail',
                  query:{
                    id:list.id,
                    title:list.title
                  }
                }">-->
        <!--        <router-link :to='`/home/message/detail?id=
                        ${list.id}&title=${list.title}`'>{{ list.title }}
                </router-link>-->
        <!--        跳转路由并携带params参数 to的字符串写法 -->

        <!--        <router-link :to='`/home/message/detail/${list.id}/${list.title}`'>{{ list.title }}</router-link>-->
        <!--        <routr-link :to="{
                  path:'/home/message/detail',
                  params:{
                      id:list.id,
                      title:list.title
                  }

                }">
                  {{ list.title }}
                </routr-link>-->
        <!--  路由携带params参数 to的对象写法-->
        <router-link
          :to="{
            name: 'xiangqing',
            // path:'/home/message/detail',
            params: {
              id: list.id,
              title: list.title,
            },
          }"
        >
          {{ list.title }}
        </router-link>
        
      </li>

      <hr />
      <router-view />
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import axios from "axios";

export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: nanoid(), title: "消息001" },
        { id: nanoid(), title: "消息002" },
        { id: nanoid(), title: "消息003" },
        { id: nanoid(), title: "消息004" },
      ],
    };
  },
  methods: {
    sendValues(id, title) {
      console.log(id, title);
    },
  },
  mounted() {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>