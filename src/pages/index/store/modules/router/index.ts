import { defineStore } from "pinia";
import { IRouterState } from "./types";
const Layout = () => import("../../../layout/index.vue");
const Section = () => import("../../../layout/components/Section.vue");
import { useSessionStorage } from "@vueuse/core";

export const useRouterStore = defineStore("router", {
  state: (): IRouterState => ({
    asyncRoutes: [],
    selectMenuRoutePath: useSessionStorage("selectMenuRoutePath", ""),
    breadcrumbArr: useSessionStorage("breadcrumbArr", [])
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
        // return this.asyncRoutes;
      } else {
        this.asyncRoutes = [];
        // return [];
      }
      // return new Promise<object[]>(resolve => {
      //   resolve(this.asyncRoutes);
      // });
    },
    //调用获取路由的接口
    getAsyncRoutes() {
      return new Promise<object[]>(resolve => {
        const arr = [
          {
            id: "1",
            path: "/home", //尾部不能带/
            name: "home", //name可以不写，但是不能重复
            component: "Layout",
            meta: {
              title: "主页", //标题中文名，非必填
              icon: "Aiming", //图标
              hidden: false, //是否隐藏
              noCache: true, //不缓存
              frameUrl: "" //外链
              //其他属性
            },
            redirect: "/home/index", //非必填
            children: [
              {
                name: "home1",
                path: "/home/index",
                id: "2",
                parentId: "",
                component: "/homeView",
                meta: {
                  title: "主页1", //标题中文名
                  icon: "", //图标
                  hidden: true, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                }
              },
              {
                name: "homeEdit",
                path: "/home/edit",
                id: "3",
                parentId: "",
                component: "/homeView/edit",
                meta: {
                  title: "主页的编辑", //标题中文名
                  icon: "", //图标
                  hidden: true, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                }
              }
            ]
          },
          {
            id: "1",
            path: "/home1", //尾部不能带/
            name: "", //name可以不写，但是不能重复
            component: "Layout",
            meta: {
              title: "主页1", //标题中文名，非必填
              icon: "Aiming", //图标
              hidden: false, //是否隐藏
              noCache: true, //不缓存
              frameUrl: "" //外链
              //其他属性
            },
            redirect: "/home1/index", //非必填
            children: [
              {
                name: "",
                path: "/home1/index",
                id: "2",
                parentId: "",
                component: "/homeView",
                meta: {
                  title: "主页1", //标题中文名
                  icon: "", //图标
                  hidden: true, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                }
              }
            ]
          },
          {
            id: "12",
            path: "/home12", //尾部不能带/
            name: "", //name可以不写，但是不能重复
            component: "Layout",
            meta: {
              title: "主页12", //标题中文名，非必填
              icon: "Aiming", //图标
              hidden: false, //是否隐藏
              noCache: true, //不缓存
              frameUrl: "" //外链
              //其他属性
            },
            redirect: "/home12/index", //非必填
            children: [
              {
                name: "",
                path: "/home12/index",
                id: "2",
                parentId: "",
                component: "/homeView",
                meta: {
                  title: "主页12", //标题中文名
                  icon: "", //图标
                  hidden: true, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                }
              }
            ]
          },
          {
            id: "12",
            path: "/home12", //尾部不能带/
            name: "", //name可以不写，但是不能重复
            component: "Layout",
            meta: {
              title: "主页12", //标题中文名，非必填
              icon: "Aiming", //图标
              hidden: false, //是否隐藏
              noCache: true, //不缓存
              frameUrl: "" //外链
              //其他属性
            },
            redirect: "/home12/index", //非必填
            children: [
              {
                name: "",
                path: "/home12/index",
                id: "2",
                parentId: "",
                component: "/homeView",
                meta: {
                  title: "主页12", //标题中文名
                  icon: "", //图标
                  hidden: true, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                }
              }
            ]
          },
          {
            id: "12",
            path: "/home12", //尾部不能带/
            name: "", //name可以不写，但是不能重复
            component: "Layout",
            meta: {
              title: "主页12", //标题中文名，非必填
              icon: "Aiming", //图标
              hidden: false, //是否隐藏
              noCache: true, //不缓存
              frameUrl: "" //外链
              //其他属性
            },
            redirect: "/home12/index", //非必填
            children: [
              {
                name: "",
                path: "/home12/index",
                id: "2",
                parentId: "",
                component: "/homeView",
                meta: {
                  title: "主页12", //标题中文名
                  icon: "", //图标
                  hidden: true, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                }
              }
            ]
          },
          {
            id: "12",
            path: "/home12", //尾部不能带/
            name: "", //name可以不写，但是不能重复
            component: "Layout",
            meta: {
              title: "主页12", //标题中文名，非必填
              icon: "Aiming", //图标
              hidden: false, //是否隐藏
              noCache: true, //不缓存
              frameUrl: "" //外链
              //其他属性
            },
            redirect: "/home12/index", //非必填
            children: [
              {
                name: "",
                path: "/home12/index",
                id: "2",
                parentId: "",
                component: "/homeView",
                meta: {
                  title: "主页12", //标题中文名
                  icon: "", //图标
                  hidden: true, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                }
              }
            ]
          },
          {
            path: "/aboutView",
            id: "4",
            name: "about1",
            component: "Layout",
            meta: {
              title: "关于1",
              hidden: false, //是否隐藏
              icon: "Aiming" //图标
            },
            redirect: "/aboutView/about",
            children: [
              {
                name: "",
                path: "/aboutView/about",
                id: "5",
                parentId: "",
                component: "Section",
                meta: {
                  title: "关于about", //标题中文名
                  icon: "", //图标
                  hidden: false, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                },
                redirect: "/aboutView/about/index",
                children: [
                  {
                    name: "aboutViewabout",
                    path: "/aboutView/about/index",
                    id: "5+",
                    parentId: "",
                    component: "/aboutView/about",
                    meta: {
                      title: "关于aboutindex", //标题中文名
                      icon: "", //图标
                      hidden: true, //是否隐藏
                      noCache: true, //不缓存
                      frameUrl: "" //外链
                      //其他属性
                    }
                  },
                  {
                    name: "aboutViewaboutEdit",
                    path: "/aboutView/about/edit",
                    id: "5+",
                    parentId: "",
                    component: "/aboutView/about/edit",
                    meta: {
                      title: "关于aboutEdit", //标题中文名
                      icon: "", //图标
                      hidden: true, //是否隐藏
                      noCache: true, //不缓存
                      frameUrl: "" //外链
                      //其他属性
                    }
                  }
                ]
              },
              {
                name: "",
                path: "/aboutView/about2",
                id: "6",
                parentId: "",
                component: "Section",
                meta: {
                  title: "关于2", //标题中文名
                  icon: "", //图标
                  hidden: false, //是否隐藏
                  noCache: true, //不缓存
                  frameUrl: "" //外链
                  //其他属性
                },
                redirect: "/aboutView/about2/index",
                children: [
                  {
                    name: "about2",
                    path: "/aboutView/about2/index",
                    id: "7",
                    parentId: "",
                    component: "/aboutView/about2",
                    meta: {
                      title: "关于22", //标题中文名
                      icon: "", //图标
                      hidden: true, //是否隐藏
                      noCache: true, //不缓存
                      frameUrl: "" //外链
                      //其他属性
                    }
                  },
                  {
                    name: "aboutViewEdit",
                    path: "/aboutView/about2/edit",
                    id: "8",
                    parentId: "",
                    component: "/aboutView/about2/edit",
                    meta: {
                      title: "关于2编辑edit", //标题中文名
                      icon: "", //图标
                      hidden: true, //是否隐藏
                      noCache: true, //不缓存
                      frameUrl: "" //外链
                      //其他属性
                    }
                  },
                  {
                    name: "test2Edit",
                    path: "/aboutView/about2/test2Edit",
                    id: "9",
                    parentId: "",
                    component: "/aboutView/about2/test2Edit",
                    meta: {
                      title: "组件的测试2index编辑页", //标题中文名
                      icon: "", //图标
                      hidden: true, //是否隐藏
                      noCache: true, //不缓存
                      frameUrl: "" //外链
                      //其他属性
                    }
                  }
                ]
              }
            ]
          },
          {
            name: "test1",
            path: "/test1",
            id: "10",
            component: "layout",
            meta: {
              title: "测试",
              hidden: false, //是否隐藏
              icon: "Bill" //图标
            },
            redirect: "/test1/test11",
            children: [
              {
                name: "",
                path: "/test1/test11",
                id: "11",
                parentId: "",
                component: "Section",
                meta: {
                  title: "测试11",
                  hidden: false, //是否隐藏
                  icon: "BroadcastRadio" //图标
                },
                redirect: "/test1/test11/index",
                children: [
                  {
                    name: "test11",
                    path: "/test1/test11/index",
                    id: "12",
                    parentId: "",
                    component: "/test1/test11",
                    meta: {
                      title: "测试111",
                      hidden: true, //是否隐藏
                      icon: "" //图标
                    }
                  }
                ]
              },
              {
                name: "",
                path: "/test1/test3",
                id: "13",
                parentId: "",
                component: "Section",
                meta: {
                  title: "测试3",
                  hidden: false, //是否隐藏
                  icon: "BroadcastRadio" //图标
                },
                redirect: "/test1/test3/index",
                children: [
                  {
                    name: "test3",
                    path: "/test1/test3/index",
                    id: "14",
                    parentId: "",
                    component: "/test1/test3",
                    meta: {
                      title: "测试33",
                      hidden: true, //是否隐藏
                      icon: "" //图标
                    }
                  },
                  {
                    name: "test3Edit",
                    path: "/test1/test3/edit",
                    id: "15",
                    parentId: "",
                    component: "/test1/test3/edit.vue",
                    meta: {
                      title: "测试33edit",
                      hidden: true, //是否隐藏
                      icon: "" //图标
                    }
                  }
                ]
              },

              {
                name: "test21",
                path: "/test1/test2",
                id: "16",
                parentId: "",
                component: "Section",
                meta: {
                  title: "测试211",
                  hidden: false, //是否隐藏
                  icon: "BookmarkOne" //图标
                },
                redirect: "/test1/test2/test2-1",
                children: [
                  {
                    name: "test211",
                    path: "/test1/test2/test2-1",
                    id: "17",
                    parentId: "",
                    component: "/test1/test2/test2-1",
                    meta: {
                      title: "测试2-1index",
                      hidden: false, //是否隐藏
                      icon: "" //图标
                    }
                  },
                  {
                    name: "test2edit",
                    path: "/test1/test2/test2-1/edit",
                    id: "18",
                    parentId: "",
                    component: "/test1/test2/test2-1/edit",
                    meta: {
                      title: "测试2edit",
                      hidden: true, //是否隐藏
                      icon: "" //图标
                    }
                  },
                  {
                    name: "test2details",
                    path: "/test1/test2/test2-1/details",
                    id: "19",
                    parentId: "",
                    component: "/test1/test2/test2-1/details.vue",
                    meta: {
                      title: "测试2details",
                      hidden: true, //是否隐藏
                      icon: "" //图标
                    }
                  },
                  {
                    name: "test2-2",
                    path: "/test1/test2/test2-2",
                    id: "20",
                    parentId: "",
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
                        id: "21",
                        parentId: "",
                        component: "/test1/test2/test2-2/index",
                        meta: {
                          title: "测试2-2index",
                          hidden: true, //是否隐藏
                          icon: "" //图标
                        }
                      },
                      {
                        name: "test2-2details",
                        path: "/test1/test2/test2-2/details",
                        id: "22",
                        parentId: "",
                        component: "/test1/test2/test2-2/details",
                        meta: {
                          title: "测试2-2index的详情",
                          hidden: true, //是否隐藏
                          icon: "" //图标
                        }
                      }
                    ]
                  },
                  {
                    name: "",
                    path: "/test1/test2/test2-3",
                    id: "23",
                    parentId: "",
                    component: "Section",
                    meta: {
                      title: "测试2-3",
                      hidden: false, //是否隐藏
                      icon: "" //图标
                    },
                    redirect: "/test1/test2/test2-3/index",
                    children: [
                      {
                        name: "test2-3",
                        path: "/test1/test2/test2-3/index",
                        id: "24",
                        parentId: "",
                        component: "/test1/test2/test2-3/index.vue",
                        meta: {
                          title: "测试2-3index",
                          hidden: true, //是否隐藏
                          icon: "" //图标
                        }
                      },
                      {
                        name: "test2-3details",
                        path: "/test1/test2/test2-3/details1/:userId",
                        id: "25",
                        parentId: "",
                        component: "/test1/test2/test2-3/details1",
                        meta: {
                          title: "测试2-3index的详情",
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
          //这块parentId是因为处理不了parentId为null时 ts报的隐式any警告
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
