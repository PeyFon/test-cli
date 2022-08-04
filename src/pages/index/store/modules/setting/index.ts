import { defineStore } from "pinia";
// import { useLocalStorage } from "@vueuse/core";

export const useSettingStore = defineStore("setting", {
  state: () => ({
    collapse: false, //左侧菜单栏是否展开，仅在aside、mixin模式下有效
    title: "", //系统的标题
    subtitle: "项目子标题" //系统的子标题
  })
});
