import { defineStore } from "pinia";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
// import en from "element-plus/lib/locale/lang/en";

// import {
//   login as userLogin,
//   logout as userLogout,
//   getUserProfile,
//   LoginData,
// } from "@/api/user/index";
// import { set, clear } from "@/utils/auth";

import { useLocalStorage } from "@vueuse/core";
export const useGlobalSettingStore = defineStore("globalSetting", {
  state: () => ({
    layout: useLocalStorage("layout", "aside"), //aside  header  mixin
    isDevelop: true,
    configProvider: {
      locale: zhCn,
      message: {
        max: 3
      },
      size: "default"
    }
  })
});
