<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">Demo</button>

  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();

    },
    go() {
      this.$router.go(3);
    }

  }
}
</script>

<style scoped>

</style>