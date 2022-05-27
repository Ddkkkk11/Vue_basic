<template>
  <ul class="todo-main">
    <Item v-for="todo in todoList" :key="todo.id" :value="todo"></Item>
  </ul>
</template>
<script>
import Item from "@/components/Item";

export default {
  name: 'List',
  components: {
    Item
  },
  data() {
    return {
      todoList: [
        {id: '001', title: '吃饭', done: false},
        {id: '002', title: '睡觉', done: false},
        {id: '003', title: 'code', done: true},
        {id: '004', title: 'English', done: false},
      ]
    }
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>