import { defineStore } from "pinia";


export const useCounterStore = defineStore('count', {
    // state
    state: () => ({count: 0}),
    // getter
    getters:{
        doubleValue: (state) => state.count*2
    },
    // action
    actions:{
        increase():void{
            this.count++
        },
        decrease():void{
            if(this.count>0){
                this.count--
            }
        },
    }
})