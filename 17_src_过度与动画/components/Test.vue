<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow" class="go">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style  scoped>
h1 {
  background-color: #bfa;
}
.hello-enter-active {
  animation: 0.5s run;
}
.hello-leave-active {
  animation: run 0.5s reverse;
}
@keyframes run {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>