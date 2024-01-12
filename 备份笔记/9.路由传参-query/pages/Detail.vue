<template>
  <ul class="news-list">
    <li>编号：{{ route.query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import { reactive, ref, toRefs } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
//这个可以,可以解构一层，即把query解构出来，但是尝试直接解构出id等失败了
let {query} = toRefs(route) 

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
