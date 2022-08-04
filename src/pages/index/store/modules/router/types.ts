import type { RouteRecordRaw } from "vue-router";
import type { RemovableRef } from "@vueuse/core";
export interface IRouterState {
  asyncRoutes: RouteRecordRaw[];
  selectMenuRoutePath: unknown;
  breadcrumbArr: RemovableRef<any[]>;
}
export type routeKey = keyof RouteRecordRaw;
