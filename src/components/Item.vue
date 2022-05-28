<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>
<script>
export default {
  name: 'Item',
  //声明接受 todo对象
  props: ['todo', 'changeValue', 'removeBtn'],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      // console.log(id);
      //通知App组件对应的value对象的done 取反
      /*  this.value.done = !this.value.done;
        console.log(this.value.done);*/
      // console.log(this.todo)
      // console.log(id);
      this.changeValue(id);
    },
    //删除
    handleDelete(id) {
      if (!confirm("你确认要删除吗?")) return;
      // console.log(id)
      this.removeBtn(id);
      // if (confirm('确认要删除吗')) this.removeBtn(id) && console.log(id)

    }
  }
}
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}


li label {
  float: left;
  cursor: pointer;
}


li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

/**/
li .btn {
  float: right;
  display: none;
  margin-right: 10px;
  margin-top: 3px;
}


li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #dddddd;

}

li:hover button {
  display: block;

}

</style>