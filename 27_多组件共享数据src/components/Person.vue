<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red;"> Count组件求和为{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="addPerson">
    <button @click="addPerson(name)">添加</button>
    <ul>
      <li v-for="person in personList  " :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import {nanoid} from 'nanoid'

export default {
  name: "Person",
  data() {
    return {
      name: ''
    }
  },
  computed: {
    // ...mapState(['personList'])
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    }
  },
  methods: {
    // ...mapMutations(['addPerson']),
    addPerson() {
      if (this.name === '') {
        alert('当前输入不能为空请重新输入');
        return
      }
      const personObj = {id: nanoid(), name: this.name}
      console.log(personObj);
      this.name = '';
      this.$store.commit('ADDPERSON', personObj);
    }

  }
  , mounted() {
    console.log(this.$store.state)
  }
}
</script>

<style scoped>

</style>