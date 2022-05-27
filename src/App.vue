<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--        头部-->
        <Top></Top>
        <!--        列表项-->
        <List></List>
        <!--        底部-->
        <Bottom></Bottom>
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