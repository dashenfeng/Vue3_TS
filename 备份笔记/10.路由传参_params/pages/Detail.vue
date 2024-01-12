<template>
  <ul class="news-list">
    <!-- params未配置props时写法 -->
    <!-- <li>编号：{{ params.id }}</li>
    <li>标题：{{ params.title }}</li>
    <li>内容：{{ params.content }}</li> -->
    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import { toRefs } from "vue";
import { useRoute } from "vue-router";
// params未配置props时写法
/* const route = useRoute();
console.log(route, "route");
const { params } = toRefs(route);
console.log(params.value); */

// params路由传参配置props时写法
defineProps(["id", "title", "content"]);
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>
