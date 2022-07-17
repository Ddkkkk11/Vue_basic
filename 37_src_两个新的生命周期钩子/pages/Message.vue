<template>
  <div>
    <ul>
      <li v-for="list in messageList" :key="list.id">

        <router-link
            :to="{
            name: 'xiangqing',
            // path:'/home/message/detail',
            query: {
              id: list.id,
              title: list.title,
              name: list.name,
            },
          }"
        >
          {{ list.title }}
        </router-link>
        <button @click="pushShow(list)">push查看</button>
        <button @click="replaceShow(list)">replace查看</button>
      </li>

      <hr/>
      <router-view/>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid";
import axios from "axios";

export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id: nanoid(), title: "消息001", name: "xdd"},
        {id: nanoid(), title: "消息002", name: "xzz"},
        {id: nanoid(), title: "消息003", name: "asd"},
        {id: nanoid(), title: "消息004", name: "zxc"},
      ],
    };
  },
  beforeDestroy() {
    console.log('Message即将被销毁')
    },
  methods: {
    pushShow(list) {
      this.$router.push({
        name: 'xiangqing',
        query: {
          id: list.id,
          title: list.title,
          name: list.name,
        },
      });
    },
    replaceShow(list) {
      this.$router.replace({
        name: 'xiangqing',
        query: {
          id: list.id,
          title: list.title,
          name: list.name
        }


      })

    }
  },
  mounted() {
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

button {
  margin: 0 10px;
}
</style>