<template>
  <div class="person">
    <input v-model="name" type="text" /><br>
    <input v-model="age" type="text" />
    <h2>{{selfDiscription}}</h2>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script setup lang='ts' name="Person">
  import {computed, reactive, toRefs, watch, watchEffect} from 'vue'
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
  let selfDiscription = computed(()=>{
    return `我叫${ name.value }, 今年${ age.value }岁`
  })
  watch(name,(newvalue, oldvalue)=>{
    console.log(oldvalue,'oldvalue');
    console.log(newvalue,'newvalue');
    
  })
   watchEffect(() => {
    let myName = name.value
    console.log('name is changed to' + myName);
    
   })
</script>

<style scoped lang='scss'>

</style>