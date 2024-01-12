<template>
  <div class="person">
    <ul>
      <!-- F1:复杂版 -->
      <!-- <li v-for="item in props.info" :id="item.id">{{ item.name }} --- {{ item.age }}</li> -->
      <!-- F2:简化版，用了数据代理 -->
      <li v-for="item in info" :id="item.id">
        {{ item.name }} --- {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
import type { Persons } from "@/types";
import { withDefaults } from "vue";

// 一、只接收list
// let props = defineProps(["info"]);
// console.log(props.info);

// 二、接受list+限制类型 泛型里面传入一个对象 {传入的参数名字+类型}
// let props = defineProps<{info:Persons}>()
// console.log(props.info);

// 三、接收 + 限制类型 + 指定默认值 + 限制必要性
// debugger;
withDefaults(defineProps<{info?:Persons}>(),{
  info:()=>[{id:'-1',name:'default',age:-1}] // 需要以函数形式返回数组
})

</script>

<style scoped lang="scss"></style>
