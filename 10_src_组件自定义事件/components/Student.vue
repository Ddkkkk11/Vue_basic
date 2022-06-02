<template>
  <div class="student">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <h2>{{ num }}</h2>
    <br>
    <button @click="add">点我num++</button>
    <button @click="sendSchoolName">点我把学生名称给app</button>
    <br>
    <button @click="unBing">解绑xdd事件</button>
    <br>
    <button @click="death">销毁Student组件当前的实例对象（Vc）</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: 'xdd',
      gender: '男',
      num: 10
    };
  },
  methods: {
    add() {
      console.log('add回调被调用了');
      this.num++;
    },
    sendSchoolName() {
      //触发Student组件实例身上的xdd 事件
      this.$emit('xdd', this.name, 123, 123, 12, 'qweasd', 'aasd', 'a', 'dasd', 'ad', 'asd', 'a', 'd', 'asd', 'ad', 123)
      // this.$emit('demo',)
      // this.$emit('click');
    },
    unBing() {
      this.$off('xdd');//只适用于解绑一个事件
      // this.$off(['xdd', 'demo']);//只适用于解绑多个事件
      // this.$off(); //所有的自定义事件全部被解绑
    },
    death() {
      this.$destroy();//销毁了Student当前的实例对象
      //销毁后所有Student组件的实例的自定义事件全部都不奏效了,

    }
  },

}
;
</script>
<style lang="less" scoped>
.student {
  background-color: brown;
  padding: 5px;

  h2 {
    color: #42b983;
    font-size: 50px;
  }
}

</style>