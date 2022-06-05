import { RouteRecordRaw } from "vue-router";

const Layout = () => import("../layout/index.vue");
const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homePage",
    meta: {
      title: "主页"
    },
    redirect: "/login"
  },
  {
    id: "login",
    name: "login",
    path: "/login",
    component: () => import("../views/login/index.vue"),
    meta: {
      title: "登录"
    }
  },

  // 404页面
  {
    id: "error",
    path: "/error",
    component: Layout,
    redirect: "/404",
    children: [
      {
        id: "403",
        path: "/403",
        component: () => import("../views/errorPage/403.vue")
      },
      {
        id: "404",
        path: "/404",
        component: () => import("../views/errorPage/404.vue")
      }
    ]
  }
];
export default commonRoutes;
// 结构示例,自定义的属性放在meta内
// const ProfileRouter: Array<RouteRecordRaw> = [
//   {
//     path: "/clipboard",
//     component: Layout,
//     redirect: "noredirect",
//     name: "ComponentDemo",
//     meta: {
//       title: "Components",
//       icon: "component"
//     },
//     children: [
//       {
//         path: "index",
//         component: () =>
//           import(
//             /* webpackChunkName: "clipboard" */ "@/views/clipboard/index.vue"
//           ),
//         name: "Clipboard",
//         meta: {
//           title: "clipboard", //标题中文名
//           icon: "#iconcopy", //图标
//           hidden: false, //是否隐藏
//           frameUrl: "", //外链
//           noCache: true //没有缓存
//         }
//       }
//     ]
//   }
// ];
