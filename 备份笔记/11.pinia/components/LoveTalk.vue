<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <button @click="clearLoveTalk">清空土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import axios from "axios";
import { nanoid } from "nanoid";
import { useTalkStore } from "@/store/loveTalk";
import { storeToRefs } from "pinia";

const talkStore = useTalkStore();
const { talkList } = storeToRefs(talkStore);

// mutate:发生变化的数据  state:当前数据
talkStore.$subscribe((mutate, state) => {
  console.log("数据发生变化", mutate, state);
  localStorage.setItem('talkList',JSON.stringify(state.talkList)) // 本地存储
});

// 方法
async function getLoveTalk() {
  // 发请求，下面这行的写法是：连续解构赋值+重命名
  // 从返回结果里面解构data，然后再从data里面解构出content，并命名为title
  let {
    data: { content: title },
  } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
  // 把请求回来的字符串，包装成一个对象
  let obj = { id: nanoid(), title }; // title用到了对象简写形式
  // 放到数组中
  talkStore.talkList.unshift(obj);
}
const clearLoveTalk = () => {
  localStorage.removeItem('talkList')
  // console.log(typeof(localStorage.getItem('talkList')));
  
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
