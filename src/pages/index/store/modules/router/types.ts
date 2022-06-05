import type { RouteRecordRaw } from "vue-router";
export interface IRouterState {
  asyncRoutes: RouteRecordRaw[];
}
export type routeKey = keyof RouteRecordRaw;
