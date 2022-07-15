<template>
  <div>
    <h1>
      当前求和为{{ sum }}
    </h1>
    <h2>我在{{ school }}学习{{ subject }}</h2>
    <h3>
      <!--      当前求和放大十倍为{{ $store.state.sum * 10 }}-->
      当前求和为{{ bigSum }}
    </h3>
    <br>
    <select v-model="n">
      <!--    <select v-model.number="n">-->
      <option :value="1">1</option>
      <option :value='2'>2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数在加</button>
    <button @click="incrementWait(n)">等一等在加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1
    }
  },
  computed: {
    ...mapState(['sum', 'school', 'subject'])
    , ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    //借助mapActions生成对应的方法,会调用dispatch去触发action里面的方法(数组写法)
    ...mapActions(["incrementOdd", "incrementWait"])

  },
  mounted() {
    const a = mapMutations([
      "increment",
      "decrement"
    ])
    console.log(a)
  }
}

</script>
<style>
div button {
  margin-left: 10px;
}

</style>


