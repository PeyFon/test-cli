import { defineStore } from "pinia";

// import {
//   login as userLogin,
//   logout as userLogout,
//   getUserProfile,
//   LoginData,
// } from "@/api/user/index";
// import { setToken, clearToken } from "@/utils/auth";
// import { UserState } from "./types";

import { useLocalStorage } from "@vueuse/core";

// 封装的方法
function usePersist(obj: object, params = "local"): void {
  const arr = Object.entries(obj);
  arr.forEach(item => {
    if (params === "local") {
      useLocalStorage(...item);
    } else {
      // 存session里
    }
  });
}
export const useUserStore = defineStore("user", {
  state: () => {
    const persist = {
      avatar: "1",
      organization: {
        name1: "",
        id1: "",
        sex1: ""
      },
      location: [1, 2],
      email: 4
    };
    usePersist(persist);
    const obj = {
      user_name: "peyfon",
      user_info: useLocalStorage("user_info", {
        name: "",
        id: "",
        sex: null //不能写undefined
      }),
      user_arr: useLocalStorage("user_arr", [1])
    };
    const data = Object.assign(obj, persist);
    return data;
  },
  getters: {
    // userProfile(state: UserState): UserState {
    //   return { ...state };
    // },
  },
  actions: {
    addArr() {
      const arr = this.location.push(7);
      // 还要再次更新usePersist函数
      usePersist({ location: arr });
    }
  }
  // persist: true, //全部持久化。但只能存在local
  // persist: {
  //   key: "user_name",
  //   storage: window.sessionStorage,
  //   paths: ["user_name", "user_arr"],
  //   beforeRestore: (context) => {
  //     console.log("Before hydration...");
  //   },
  //   afterRestore: (context) => {
  //     console.log("After hydration...");
  //   },
  // },
});
