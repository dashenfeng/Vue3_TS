<template>
  <div>
    <Person ref="ren" />
    <button @click="handler">获取子组件</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Person from "./Person.vue";
let ren = ref();
const handler = () => {
    console.log(ren.value,'ren');
    ren.value.showLog()
    
};
</script>

<style scoped lang="scss"></style>
