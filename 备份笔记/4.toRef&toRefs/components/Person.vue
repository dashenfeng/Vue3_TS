<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    
  </div>
</template>

<script setup lang='ts' name="Person">
  import {reactive, toRefs} from 'vue'
  let person = reactive({
    name:'可莉',
    age:8
  })
  let {name, age} = toRefs(person)
  let changeName = ()=>{
    name.value = 'fengzi'
  }
  let changeAge = ()=>{
    age.value = 18
  }
</script>

<style scoped lang='scss'>

</style>