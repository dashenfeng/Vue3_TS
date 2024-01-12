<template>
  <Person :info="personList"></Person>
</template>

<script setup lang="ts">
import Person from "@/components/Person.vue"; //标签里面已经写了setup了，会自动retun（注册）
import { type Persons } from "./types";
import { reactive } from "vue";

// reactive可以加泛型，效果等同于 let personList:Persons = xxx
let personList = reactive<Persons>([
  { id: "001", name: "fengzi", age: 8 },
  { id: "002", name: "wanwan", age: 18 },
  { id: "003", name: "keli", age: 12, sex: "luoli" },
]);
</script>

<style scoped lang="scss"></style>
