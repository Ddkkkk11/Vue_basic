<template>
  <div>
    <h1>
      当前求和为{{ sum }}
    </h1>
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
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
      n: 1
    }
  },
  methods: {
    increment() {
      this.sum += this.n;

    },
    decrement() {
      console.log(typeof this.n)

      this.sum -= this.n;

    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500)
    },


  }
}

</script>
<style>
div button {
  margin-left: 10px;
}

</style>


