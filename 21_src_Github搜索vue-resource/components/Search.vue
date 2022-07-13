<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
        @keyup.enter="searchUsers"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
// import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      console.log(this);

      //请求前 更新List里面的数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      this.$http
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
          //请求失败更新list数据
          (error) => {
            console.log("请求失败了", error.message);
            this.$bus.$emit("updateListData", {
              // isFirst: false,
              isLoading: false,
              errMsg: error.message,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
</style>