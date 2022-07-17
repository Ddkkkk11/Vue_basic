<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">message
          </router-link>
        </li>
      </ul>
      <!--        这里的News是组件名称 -->
      <!--        缓存多个include="news
                          缓存一个:include="['News','Message']
        "-->
      <router-view>
      </router-view>

    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      values: []
    }
  },
  methods: {},
}
</script>

<style scoped>

</style>