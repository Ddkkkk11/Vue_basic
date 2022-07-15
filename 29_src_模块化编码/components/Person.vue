<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为{{ sum }}</h3>
    <h2>列表中第一个人的名字是{{ firstPersonName }}</h2>
    <input
      type="text"
      placeholder="请输入名字"
      v-model="name"
      @keyup.enter="addPerson"
    />
    <button @click="addPerson(name)">添加</button>
    <button @click="addWang">添加一个王</button>
    <button @click="add">添加一个服务器返回的名字</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // ...mapState(['personList'])
    personList() {
      return this.$store.state.personOptions.personList;
    },
    sum() {
      return this.$store.state.countOptions.sum;
    },
    firstPersonName() {
      return this.$store.getters["personOptions/firstPersonName"];
    },
  },
  methods: {
    // ...mapMutations(['addPerson']),
    addPerson() {
      if (this.name === "") {
        alert("当前输入不能为空请重新输入");
        return;
      }
      const personObj = { id: nanoid(), name: this.name };
      console.log(personObj);
      this.name = "";
      this.$store.commit("personOptions/ADDPERSON", personObj);
    },
    addWang() {
      this.$store.dispatch("personOptions/addPersonWang", {
        name: this.name,
        id: nanoid(),
      });
      this.name = "";
    },
    add() {
      this.$store.dispatch("personOptions/addPersonServer");
    },
  },
  mounted() {
    // console.log(this.$store.state.countOptions.sum);
  },
};
</script>

<style scoped>
</style>