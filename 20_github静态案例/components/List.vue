<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      v-show="dataObj.users.length"
      class="card"
      v-for="user in dataObj.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="dataObj.isFirst">welcome to Github</h1>
    <!-- 展示加载词 -->
    <h1 v-show="dataObj.isLoading">Loading please wait.............</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="dataObj.errMsg">{{ dataObj.errMsg }}</h1>
  </div>
</template>

<script>
//https://api.github.com/search/users?q=xxx接口地址
export default {
  name: "List",
  data() {
    return {
      dataObj: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      /* dataObj.isFirst = false;
     this.dataObj = dataObj; */
      this.dataObj = { ...this.dataObj, ...dataObj };
      console.log("添加属性后的", dataObj);
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
h1 {
  display: block;
  margin-left: 80px;
}
</style>