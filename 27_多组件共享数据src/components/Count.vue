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
    <h3 style="color: red">Person组件的总人数是{{ personList.length }}</h3>
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
    ...mapState(['sum', 'school', 'subject', 'personList'])
    , ...mapGetters(['bigSum']),

  },
  methods: {
    //程序员亲自写方法
    /* increment() {
       this.$store.commit('JIA', this.n)
     },
     decrement() {
       this.$store.commit('JIAN', this.n)
     },*/
    //借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(对象的写法)
    ...mapMutations({
      increment: 'JIA',
      decrement: 'JIAN'
    }),
    //借助mapMutations生成对应的方法,方法中会调用commit去联系mutations(数组写法) 如
    // 果函数名称和触发的commit的Mutations中的方法名称一样
    /* ...mapMutations([
       'JIA',
       'JIAN'
     ]),*/
    /***********************************************/
    /*   incrementOdd() {
         this.$store.dispatch('jiaOdd', this.n)
       }
       ,
       incrementWait() {
         this.$store.dispatch('jiaDelay', this.n)
       }
       ,*/
    //借助mapActions生成对应的方法,会调用dispatch去触发action里面的方法(对象的写法)

    ...mapActions({
      incrementOdd: 'jiaOdd',
      incrementWait: 'jiaDelay'
    }),
    //借助mapActions生成对应的方法,会调用dispatch去触发action里面的方法(数组写法)

    // ...mapActions(["jiaOdd", "jiaDelay"])

  },
  mounted() {
    /*  const x = mapGetters({
        bigSum: 'bigSum'
      })
      console.log(x.he)*/
    const a = mapMutations({
      increment: 'JIA',
      decrement: 'JIAN'
    })
    console.log(a)
  }
}

</script>


