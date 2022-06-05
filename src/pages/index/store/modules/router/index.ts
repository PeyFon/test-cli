import { defineStore } from "pinia";
import { IRouterState } from "./types";
const Layout = () => import("../../../layout/index.vue");
const Section = () => import("../../../layout/components/Section.vue");

export const useRouterStore = defineStore("router", {
  state: (): IRouterState => ({
    asyncRoutes: []
  }),
  getters: {
    //加工下state内的数据
  },
  actions: {
    //处理路由数据生成能使用的路由
    async initAsyncRoutes() {
      const res = await this.getAsyncRoutes();
      if (res.length) {
        const arr = this.handleAsyncRoutes(res as object[]);
        this.asyncRoutes = [...(arr as [])];
        return this.asyncRoutes;
      } else {
        return [];
      }
    },
    //调用获取路由的接口
    getAsyncRoutes() {
      return new Promise<object[]>(resolve => {
        const arr = [
          {
            name: "test1",
            path: "/test1",
            id: "/test1",
            component: "layout",
            meta: {
              title: "测试",
              hidden: false, //是否隐藏
              icon: "Bill" //图标
            },
            redirect: "/test1/index",
            children: [
              {
                name: "test1",
                path: "/test1/index",
                id: "/test1/index",
                parentId: "/test1",
                component: "/test1",
                meta: {
                  title: "测试11",
                  hidden: false, //是否隐藏
                  icon: "BroadcastRadio" //图标
                }
              },
              {
                name: "test21",
                path: "/test1/test2",
                id: "/test1/test2",
                parentId: "/test1",
                component: "Section",
                meta: {
                  title: "测试211",
                  hidden: false, //是否隐藏
                  icon: "BookmarkOne" //图标
                },
                redirect: "/test1/test2/index",
                children: [
                  {
                    name: "test211",
                    path: "/test1/test2/index",
                    id: "/test1/test2/index",
                    parentId: "/test1/test2",
                    component: "/test1/test2/index",
                    meta: {
                      title: "测试2index",
                      hidden: false, //是否隐藏
                      icon: "" //图标
                    }
                  },
                  {
                    name: "test2edit",
                    path: "/test1/test2/edit",
                    id: "/test1/test2/edit",
                    parentId: "/test1/test2",
                    component: "/test1/test2/edit",
                    meta: {
                      title: "测试2edit",
                      hidden: true, //是否隐藏
                      icon: "" //图标
                    }
                  },
                  {
                    name: "test2details",
                    path: "/test1/test2/details",
                    id: "/test1/test2/details",
                    parentId: "/test1/test2",
                    component: "/test1/test2/details.vue",
                    meta: {
                      title: "测试2details",
                      hidden: true, //是否隐藏
                      icon: "" //图标
                    }
                  },
                  {
                    name: "test2-2",
                    path: "/test1/test2/test2-2",
                    id: "/test1/test2/test2-2",
                    parentId: "/test1/test2",
                    component: "Section",
                    meta: {
                      title: "测试2-2",
                      hidden: false, //是否隐藏
                      icon: "" //图标
                    },
                    redirect: "/test1/test2/test2-2/index",
                    children: [
                      {
                        name: "test2-2",
                        path: "/test1/test2/test2-2/index",
                        id: "/test1/test2/test2-2/index",
                        parentId: "/test1/test2",
                        component: "/test1/test2/test2-2/index",
                        meta: {
                          title: "测试2-2index",
                          hidden: false, //是否隐藏
                          icon: "" //图标
                        }
                      },
                      {
                        name: "test2-3",
                        path: "/test1/test2/test2-3",
                        id: "/test1/test2/test2-3/index",
                        parentId: "/test1/test2",
                        component: "/test1/test2/test2-3/index",
                        meta: {
                          title: "测试2-3index",
                          hidden: false, //是否隐藏
                          icon: "" //图标
                        }
                      },
                      {
                        name: "test2-3details",
                        path: "/test1/test2/test2-3/details1",
                        id: "test1-test2-test2-3-details",
                        parentId: "/test1/test2111",
                        component: "/test1/test2/test2-3/details1",
                        meta: {
                          title: "测试2-3index的详情",
                          hidden: true, //是否隐藏
                          icon: "" //图标
                        }
                      },
                      {
                        name: "test2-2details",
                        path: "/test1/test2/test2-2/details",
                        id: "test1-test2-test2-2-details",
                        parentId: "/test1/test2111",
                        component: "/test1/test2/test2-2/details",
                        meta: {
                          title: "测试2-2index的详情",
                          hidden: true, //是否隐藏
                          icon: "" //图标
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ];
        resolve(arr);
      });
    },
    // 处理后端返回的路由数据
    //component项必须有值
    handleAsyncRoutes(routes: object[]): object[] {
      if (routes.length) {
        routes.filter(route => {
          // if (!route["parentId"]) {
          //   route["parentId"] = "";
          // }
          if (route["component"].toLowerCase() === "section") {
            // Section组件特殊处理
            route["component"] = Section;
          } else if (route["component"].toLowerCase() === "layout") {
            // Layout组件特殊处理
            route["component"] = Layout;
          } else {
            const component = route["component"];
            route["component"] = () =>
              Promise.resolve(require(`../../../views${component}`).default);
          }
          if (route["children"] && route["children"].length) {
            route["children"] = this.handleAsyncRoutes(route["children"]);
          }
        });
        return routes;
      } else {
        return [];
      }
    }
  }
});
