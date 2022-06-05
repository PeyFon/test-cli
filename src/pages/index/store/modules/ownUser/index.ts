import { defineStore, acceptHMRUpdate } from "pinia";
import { useLocalStorage } from "@vueuse/core";
// import { useRouterStore } from "../router/index";
export const useOwnUserStore = defineStore("ownUser", {
  state: () => {
    return {
      name: "自己的名",
      current: 1000,
      localData: useLocalStorage("localData", 11)
    };
  },
  //类似于computed
  getters: {
    newName(state): string {
      return "getters----" + state.name + "---" + this.getUserCurrent;
    },
    getUserCurrent(): number {
      return this.current * 2;
    }
  },
  //类似与methods， 同步异步都可以
  actions: {
    //写箭头函数的话作用域就变了
    setCurrent(num: number) {
      //   console.log("使用RouterStore", useRouterStore());
      this.current = num;
    }
  }
});
// 热更新
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(
    acceptHMRUpdate(useOwnUserStore, import.meta.webpackHot)
  );
}
