<template>
  <div>
    <ul>
      <li v-for="list in messageList" :key="list.id">
        <!--        跳转路由并携带query参数 to的字符串写法-->
        <!--        <router-link :to='`/home/message/detail?id=${list.id}&title=${list.title}`'>{{ list.title }}-->
        <!--        </router-link>-->
        <!--        跳转路由并携带query参数 to的对象写法-->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:list.id,
            title:list.title,
            saying:test
          }
        }">
          {{ list.title }}
        </router-link>
      </li>
      <hr>
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
        {id: nanoid(), title: '消息001'},
        {id: nanoid(), title: '消息002'},
        {id: nanoid(), title: '消息003'},
        {id: nanoid(), title: '消息004'},
      ],
      test: [],
      keyWord: 'ddkkkk11'
    }
  },
  methods: {
    sendValues(id, title) {
      console.log(id, title)
    }
  },
  beforeMount() {
    axios.get('https://api.uomg.com/api/comments.163?sort=热歌榜&format=json&mid=3026045580').then(
        response => {
          console.log(response.data.data)
          this.messageList.push({
            id: nanoid(),
            title: response.data.data.name
          });
          this.test.unshift({
            id: nanoid(),
            title: response.data.data.content
          })
          console.log(this.test[0].title)
        }
    )

    /*
    * this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          //请求成功更新List数据
          (response) => {
            console.log("请求成功了");
            this.$bus.$emit("updateListData", {
              // isFirst: false,
              isLoading: false,
              errMsg: "",
              users: response.data.items,
            });
          },
    * */

  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>