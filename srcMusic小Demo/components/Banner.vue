<template>
  <div class="page-header"><h2>Vue Router Demo</h2>
    <!--    <h3 v-show="sayIng.length!=0">{{ sayIng[0].title }}</h3>-->
    <h3>歌名：{{ title }}</h3>
  </div>

</template>

<script>
import axios from "axios";
import {nanoid} from "nanoid";

export default {
  name: "Banner",
  data() {
    return {
      title: '',
      sayIng: [{id: nanoid(), title: '网易云评论'}]
    }

  },
  beforeMount() {
    axios.get('https://api.uomg.com/api/comments.163?sort=热歌榜&format=json&mid=3026045580').then(
        response => {
          // console.log(this.sayIng[0].title)
          this.sayIng.unshift({
            id: nanoid(),
            title: response.data.data.content
          })
          // console.log(this.sayIng.title)
        }
    )
  },
  mounted() {
    this.$bus.$on('music', (musicTitle) => {
      this.title = musicTitle;
      // console.log(musicTitle)
    })
  }
}
</script>

<style scoped>

</style>