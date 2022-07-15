<template>
  <h2>{{ sayIng[0].title }}</h2>

</template>

<script>
import axios from "axios";
import {nanoid} from "nanoid";

export default {
  name: "Music",
  data() {
    return {
      title: '',
      sayIng: [{id: nanoid(), title: '网易云精选评论'}]
    }
  },
  beforeMount() {
    axios.get('https://api.uomg.com/api/comments.163?sort=热歌榜&format=json&mid=80317792').then(
        response => {
          // console.log(this.sayIng[0].title)
          this.sayIng.unshift({
            id: nanoid(),
            title: response.data.data.content
          });
          this.$bus.$emit('music', response.data.data.name)
          // console.log(response.data.data.name)
        }
    )
  }
}
</script>

<style scoped>

</style>