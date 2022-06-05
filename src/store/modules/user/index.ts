import { defineStore } from "pinia";

// import {
//   login as userLogin,
//   logout as userLogout,
//   getUserProfile,
//   LoginData,
// } from "@/api/user/index";

import { IUserState } from "./types";

import { useLocalStorage } from "@vueuse/core";
export const useGlobalUserStore = defineStore("globalUser", {
  state: () => ({
    user_name: useLocalStorage("user_name", ""),
    user_info: useLocalStorage("user_info", {
      name: "",
      id: "1",
      sex: null //不能写undefined
    }),
    user_arr: useLocalStorage("user_arr", [1]),
    avatar: undefined,
    token: useLocalStorage("token", "")
  }),
  getters: {
    // userProfile(state: UserState): UserState {
    //   return { ...state };
    // },
  },
  actions: {
    addArr() {
      this.user_arr.push(4);
    }

    // switchRoles() {
    //   return new Promise((resolve) => {
    //     this.role = this.role === "user" ? "user" : "admin";
    //     resolve(this.role);
    //   });
    // },
    // // 设置用户的信息
    // setInfo(partial: Partial<UserState>) {
    //   this.$patch(partial);
    // },
    // // 重置用户信息
    // resetInfo() {
    //   this.$reset();
    // },
    // // 获取用户信息
    // async info() {
    //   //   const result = await getUserProfile();
    //   //   this.setInfo(result);
    // },
    // // 异步登录并存储token
    // async login() {
    //   //   const result = await userLogin(loginForm);
    //   //   const token = result?.token;
    //   //   if (token) {
    //   //     setToken(token);
    //   //   }
    //   //   return result;
    // },
    // // Logout
    // async logout() {
    //   //   await userLogout();
    //   //   this.resetInfo();
    //   //   clearToken();
    //   //   // 路由表重置
    //   //   // location.reload();
    // },
  }
});
