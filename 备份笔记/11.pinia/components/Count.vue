<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>当前求大和为：{{ bigSum }}</h2>
    <h2>学校：{{ school }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <!-- <option :value="3">3</option> -->
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";
import { useCountStore } from "@/store/count";
import { storeToRefs } from "pinia";

const countStore = useCountStore();
const {sum, school, bigSum} = storeToRefs(countStore) // 用storeToRefs来转换，只将仓库里的值转换为ref
//sum是ref值，但是他包在reactive对象里（countStore），自动解包了，所以不用.value
console.log(countStore.sum, "aa");

// 数据
let n = ref(1); // 用户选择的数字


// 方法
function add() {
  // F1：符合直觉的改法 -- 单独修改
  countStore.sum += n.value;

  // F2:批次修改
  // countStore.$patch({
  //   sum:888,
  //   school:'wanwanxiaoxue'
  // })

  // F3:调用increment
  // countStore.increment(n.value)
}

function minus() {
  countStore.sum -= n.value;
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
