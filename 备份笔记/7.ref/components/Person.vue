<template>
  <div class="person">
    <h1>fengzi</h1>
    <h2 ref="wanwan">wanzi</h2>
    <button @click="showLog">输出元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from "vue";

const wanwan = ref(); // vue3给标签打容器后，要在setup里面创建这个容器
const showLog = () => {
  console.log(wanwan.value);
};
// 把想要导出的东西导出
defineExpose({
  wanwan,
  showLog
})
</script>

<style scoped lang="scss"></style>
