import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import NProgress from 'nprogress'
import commonRoutes from "./commonRoutes";
import pinia, { useRouterStore, useGlobalUserStore } from "../store/index";

const routes: Array<RouteRecordRaw> = [...commonRoutes];
const whiteList = ["login"];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
const _globalUserStore = useGlobalUserStore(pinia);
const _routerStore = useRouterStore(pinia); //不能在pinia没挂载前就运行
router.beforeEach(async (to, from, next) => {
  // console.log(to, from, "to, from");
  if (_globalUserStore.token) {
    if (_routerStore.asyncRoutes.length) {
      next();
    } else {
      await _routerStore.initAsyncRoutes();
      await _routerStore.asyncRoutes.forEach((route: RouteRecordRaw) => {
        // console.log(route, "route");
        router.addRoute(route);
      });
      next({ ...to, replace: true });
    }
  } else {
    if (whiteList.includes(String(to.name))) {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.fullPath } }); // redirect逻辑待完善
    }
  }
});

router.onError(error => {
  console.log(error, "路由错误");
});
export default router;
