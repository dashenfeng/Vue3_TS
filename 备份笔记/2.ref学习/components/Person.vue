<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>性别:{{ age }}</h2>
        <button @click="addAge">修改年龄</button>
    </div>
</template>

<script setup lang='ts' name="fengzi">
    import { ref } from 'vue';
    let name = ref('峰峰')
    let age = ref(18)
    let addAge = ()=>{
        age.value++
    }
</script>

<style scoped lang='scss'>
    .person{
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        height: 100px;
    }
</style>