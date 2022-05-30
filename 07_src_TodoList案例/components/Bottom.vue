<template>
  <div class="todo-footer" v-if="total">
    <label>
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  props: ['todoList', 'clearEvery', 'hookAll'],
  computed: {
    //判断已经完成的和全部的是否相等
    isAll: {
      get() {
        // return this.doneTotal === 0 ? false : this.doneTotal === this.total;
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        //value的值是被修改最新的值
        this.hookAll(value);
      }
    },
    total() {
      return this.todoList.length
    },
    doneTotal() {
      /*
      //不高端
    const count = this.todoList.filter(todo => todo.done === true)
    return count.length;*/
      return this.todoList.reduce((pre, current) => {
        //数组长度是多少 就能够被调用多少次
        // console.log(pre, current)//pre是上一次的值  0 第一次也就是初始值
        //第二次调用的per是第一次调用的返回值 current就是每一次的对象
        return pre + (current.done ? 1 : 0);
      }, 0)
    }
  },
  methods: {
    //全勾选
    /* checkAll(e) {

       // console.log(e.target.checked)
       this.hookAll(e.target.checked);
     },*/
    clearAll() {
      if (confirm('此操作不可逆是否继续'))
        this.clearEvery();
    },
    changeHook() {
      this.hookAll();
    }

  }
  /* methods: {
     //统计
     addUp() {
       const count = this.todoList.filter(todo => todo.done === true)
       return count.length;
     }*/
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>