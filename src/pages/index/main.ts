import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import piniaStore from "./store";
import router from "./router";

//注入下载下来的iconPark
import { injectIconParkComponents } from "@/utils/iconPark";
injectIconParkComponents(app);

// utils
import * as utils from "@/utils/index";
app.config.globalProperties.$utils = utils;

import "@/styles/common.scss";
import "@/styles/reset.css";

//手动引入elementPlus的部分css样式文件
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-badge.css"; //当项目里使用了el-badge组件时可以去掉
import "element-plus/theme-chalk/el-loading.css";

//默认的暗黑样式
// import "element-plus/theme-chalk/dark/css-vars.css";

//v-loading的自动引入有问题，暂时自己注册个使用v-load
import { vLoading } from "element-plus/es/components/loading/src/directive";
app.directive("load", vLoading);

app.use(piniaStore).use(router);
router.isReady().then(() => {
  app.mount("#app");
});
