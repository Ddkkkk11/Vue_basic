<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--        头部-->
        <Top :addTodo="addTodo"></Top>
        <!--        列表项-->
        <List :todoList='todoList' :changeValue="changeValue" :removeBtn="removeBtn"></List>
        <!--        底部-->
        <Bottom :todoList='todoList'
                :clearEvery="clearEvery"
                :hookAll="hookAll"
        ></Bottom>
      </div>
    </div>
  </div>
</template>
<script>
//引入组件
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import List from "@/components/list";

export default {
  name: "App",
  components: {
    Top, Bottom, List,
  },
  data() {
    return {
      todoList: [
        {id: '001', title: '吃饭', done: false},
        {id: '002', title: '睡觉', done: false},
        {id: '003', title: 'code', done: true},
        {id: '004', title: 'English', done: false},
      ],
    }
  },
  methods: {
    //添加信息
    addTodo(x) {
      // console.log("我收到了数据" + x);
      this.todoList.unshift(x);
    },
    //勾选or取消勾选
    changeValue(id) {
      this.todoList.forEach((todo) => {
        // console.log(todo)
        if (todo.id === id) todo.done = !todo.done;
      })
    },
    //删除
    removeBtn(id) {
      /* this.todoList.forEach((Ele, index) => {
         if (Ele.id === id) {
           this.todoList.splice(index, 1);
         }
       });*/
      this.todoList = this.todoList.filter((todo) => {
        return todo.id !== id;
      })
    },
    //删除全部
    clearEvery() {
      this.todoList = this.todoList.filter((todo) => {
        // if (todo.id === id)
        return !todo.done
      })
    },
    //全选
    hookAll(judge) {
      this.todoList.forEach((value) => value.done = judge)
    }
  }
};
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


/*main*/

/*item*/

/*footer*/


</style>