import { RouteRecordRaw } from "vue-router";
// 根据path找到对应的路由信息
export function findRouteByPath(
  path: string,
  routes: RouteRecordRaw[]
): RouteRecordRaw {
  let res = routes.find((item: RouteRecordRaw) => item.path == path);

  if (res) {
    return res;
  } else {
    for (let i = 0; i < routes.length; i++) {
      if (
        routes[i].children instanceof Array &&
        routes[i].children.length > 0
      ) {
        res = findRouteByPath(path, routes[i].children);
        if (res) {
          return res;
        }
      }
    }
    return null;
  }
}
// 根据path找到对应的路由信息
export function findRouteByTitle(
  title: string,
  routes: RouteRecordRaw[]
): RouteRecordRaw {
  let res = routes.find(item => item.meta.title == title);
  if (res) {
    return res;
  } else {
    for (let i = 0; i < routes.length; i++) {
      if (
        routes[i].children instanceof Array &&
        routes[i].children.length > 0
      ) {
        res = findRouteByTitle(title, routes[i].children);
        if (res) {
          return res;
        }
      }
    }
    return null;
  }
}
