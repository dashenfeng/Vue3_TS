<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="" />
  </div>
</template>

<script setup lang="ts" name="Home">
import { useRouter } from "vue-router";

const router = useRouter();
console.log(router); //里面有路由器的各种方法

setTimeout(() => {
  router.push("/news"); //2秒后跳到/news页面
}, 2000);
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
