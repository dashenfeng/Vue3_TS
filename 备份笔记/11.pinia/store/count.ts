import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    // 存数据的地方
    state:() => {
        return {
            sum:6,
            school:'fengziSchool',
            address:'翻斗花园'
        }
    },
    // 放置动作函数,用于相应组件中的动作
    actions:{
        // 当有复杂逻辑或者是复用需求的时候，可以配置actions，否则在pinia里没必要
        increment(value:number){
            // console.log('increment被调用');
            this.sum += value
            
        }
    },
    // 对state里的数据进行再加工,和state里的数据一样可以直接取出来
    getters:{
        bigSum:(state):number => state.sum * 10,
        // 方法似乎不能写成箭头函数
        upperSchool():string{
            return this.school.toUpperCase()
        }
    }
})