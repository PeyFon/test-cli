// // import Request from "./request";
// // import qs from "qs";
// // // import Message from "@/utils/resetMessage";
// // import Cookies from "js-cookie";

// // const request = new Request({
// //   baseURL: process.env.VUE_APP_PM_API, // url = base url + request url
// //   // withCredentials: true, // send cookies when cross-domain requests
// //   // timeout: 10000, // request timeout
// //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
// //   interceptors: {
// //     // 请求拦截器
// //     requestInterceptors: (config) => {
// //       console.log("爱仕达哈好的");
// //       console.log(config);
// //       // if (Cookies.get("XSRF-TOKEN")) {
// //       //   config.headers["RequestVerificationToken"] = Cookies.get("XSRF-TOKEN");
// //       // }
// //       // if (localStorage["vuex-along"]) {
// //       //   const local = JSON.parse(localStorage["vuex-along"]);
// //       //   const session = JSON.parse(sessionStorage["vuex-along"]);
// //       //   config.headers["Authorization"] = local.root ? local.root.token : "";
// //       //   if (local.root && session?.root?.index?.activeMenu?.id) {
// //       //     config.headers["CurrentMenuId"] = session.root.index.activeMenu.id;
// //       //     config.headers["CurrentProjId"] = local.root.project.id;
// //       //   }
// //       // }
// //       // if (config.method === "get") {
// //       //   //如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
// //       //   config.paramsSerializer = function (params) {
// //       //     return qs.stringify(params, { arrayFormat: "repeat" });
// //       //   };
// //       // }
// //       // if (config.method === "post") {
// //       //   config.data = qs.stringify(config.data);
// //       // }
// //       // if (config.method === "body") {
// //       //   config.headers["Content-Type"] = "application/json";
// //       //   config.method = "post";
// //       // }
// //       // if (config.method === "formfile") {
// //       //   config.method = "post";
// //       // }
// //       // if (config.method === "put") {
// //       //   config.headers["Content-Type"] = "application/json; charset=utf-8";
// //       // }
// //       // config.headers["Accept-Language"] = "zh-Hans";
// //       return config;
// //     },
// //     // 响应拦截器
// //     responseInterceptors: (result) => {
// //       console.log("实例响应拦截器");
// //       return result;
// //     },
// //   },
// // });

// // export default request;

// import Request from "./request";

// import type { RequestConfig } from "./request/types";
// interface YWZRequestConfig<T> extends RequestConfig {
//   data?: T;
// }
// interface YWZResponse<T> {
//   statusCode: number;
//   desc: string;
//   result: T;
// }

// const request = new Request({
//   baseURL: "",
//   timeout: 1000 * 60 * 5,
//   interceptors: {
//     // 请求拦截器
//     requestInterceptors: config => config,
//     // 响应拦截器
//     responseInterceptors: result => result
//   }
// });

// /**
//  * @description: 函数的描述
//  * @generic D 请求参数
//  * @generic T 响应结构
//  * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
//  * @returns {Promise}
//  */
// const ywzRequest = <D = any, T = any>(config: YWZRequestConfig<D>) => {
//   const { method = "GET" } = config;
//   if (method === "get" || method === "GET") {
//     config.params = config.data;
//   }
//   // return request.request<YWZResponse<T>>(config);
//   return request.request<YWZResponse<T>>(config);
// };

// export default ywzRequest;
