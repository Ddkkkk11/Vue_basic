<template>
  <ul class="todo-main">
    <Item v-for="todoObj in todoList"
          :key="todoObj.id"
          :todo="todoObj"
          :changeValue="changeValue">
    </Item>
  </ul>
</template>
<script>
import Item from "@/components/Item";

export default {
  name: 'List',
  components: {
    Item
  },
  props: ['todoList', 'changeValue'],
  //props是只读的不能修改值的大小

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