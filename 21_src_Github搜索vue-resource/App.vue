<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import List from "./components/List";
import Search from "./components/Search";

export default {
  components: { List, Search },
  name: "App",
};
</script>

