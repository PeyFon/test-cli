import "vue-router";

declare module "vue-router" {
  interface _RouteRecordBase {
    hidden?: boolean | string | number;
    id?: string | undefined | null;
    parentId?: string | undefined | null;
  }
}

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    icon?: string;
    hidden?: boolean;
    noCache?: boolean;
  }
}
