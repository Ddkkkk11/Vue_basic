<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from './components/Person'

export default {
  name: "App",
  components: {
    Count, Person
  },
};
</script>

