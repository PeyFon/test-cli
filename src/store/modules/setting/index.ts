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
    layout: "header", //aside  header  mixin
    sidebarWidth: "240px", //左侧菜单栏的宽度
    isMock: false, //true,false是否开启mock
    isDevelop: JSON.parse(process.env.VUE_APP_ISDEVELOP), //是否为开发者
    configProvider: {
      //elementPlus的配置
      locale: zhCn,
      message: {
        max: 3
      },
      size: "default"
    },
    isMultiProject: false, //是否多项目
    projInfo: {
      //多项目时存放选中的项目信息
      name: "",
      id: ""
    },
    titles: {
      //整个系统的标题名，用于浏览器的顶部显示
      index: "模板项目",
      system: "模板项目后台"
    }
  })
});
