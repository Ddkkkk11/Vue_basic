<template>
  <div>
    <!--    <h1>{{ msg }}</h1>-->
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学生地址:{{ address }}</h2>
  </div>
</template>

<script>
//引入一个混合
// import {mixin, mixin2} from '../mixin';

export default {
  name: "School",
  data() {
    return {
      name: 'aku',
      address: '安康'
    };
  },
  /*mounted() {
    console.log('你好呀!!!!!!!!!!!!!!!!!!!')
  },*/
  // mixins: [mixin, mixin2]

};
</script>