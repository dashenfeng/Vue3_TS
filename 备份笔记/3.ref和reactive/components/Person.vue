<template>
  <div class="person">
    <h2>姓名:{{ fengfeng.name }}</h2>
    <h2>性别:{{ fengfeng.age }}</h2>
    <ul>
      <li v-for="item in testlist" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="addAge">修改年龄</button>
    <button @click="changeName">修改姓名</button>
  </div>
</template>

<script setup lang="ts" name="fengzi">
import { reactive, ref } from "vue";
let name = ref("峰峰");
let age = ref(18);
let addAge = () => {
  fengfeng.age++;
};
const fengfeng = reactive({
  name: "fengzi",
  age: 18,
  sex: "男",
});
const testlist = reactive([
  { id: 1, name: "qqny" },
  { id: 2, name: "lmo" },
  { id: 3, name: "zly" },
]);
let changeName = () => {
  const newFengfeng = reactive({
    name: "dashenfeng",
    age: 18,
    sex: "male",
  });
  Object.assign(fengfeng, newFengfeng); // 有则覆盖，没有则添加
};
</script>

<style scoped lang="scss">
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  height: 100px;
}
</style>
