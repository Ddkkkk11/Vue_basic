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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数在加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1
    }
  },
  computed: {
    //程序员自己亲自去写计算属性
    // he() {
    //   return this.$store.state.sum;
    // }
    //借助mapState生成计算属性,从state中读取数据(对象写法)
    // ...mapState({sum: 'sum', school: 'school', subject: 'subject'})
    //借助mapState生成计算属性,从state中读取数据(数组) 必须计算属性名称和state里面的数据的值一样

    ...mapState(['sum', 'school', 'subject'])
    //借助mapGetters生成计算属性 从getters中读取数据(对象写法)
    // , ...mapGetters({bigSum: 'bigSum'})
    //借助mapGetters生成计算属性 从getters中读取数据(数组写法)
    , ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaDelay', this.n)
    },


  },
  mounted() {
    /*  const x = mapGetters({
        bigSum: 'bigSum'
      })
      console.log(x.he)*/
  }
}

</script>
<style>
div button {
  margin-left: 10px;
}

</style>


