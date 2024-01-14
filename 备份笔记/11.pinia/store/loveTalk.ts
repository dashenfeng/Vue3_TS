import { defineStore } from "pinia";

export const useTalkStore = defineStore("Talk", {
  state: () => {
    return {
      talkList: JSON.parse(localStorage.getItem('talkList') as string ) || [],  // as string ：TS里的断言
    };
  },
});
