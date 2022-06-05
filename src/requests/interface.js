import axios from "axios";
import qs from "qs";

// import { ElMessage } from "element-plus";
import { useGlobalUserStore } from "@/store";
const _store = useGlobalUserStore();

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_PM_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 10000, // request timeout
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

// request interceptor
service.interceptors.request.use(
  config => {
    // 请求头token信息，请根据实际情况进行修改
    config.headers["Authorization"] = _store.token;

    if (config.method === "get") {
      //如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: "repeat" });
      };
    }
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    if (config.method === "body") {
      config.headers["Content-Type"] = "application/json";
      config.method = "post";
    }
    if (config.method === "formfile") {
      config.method = "post";
    }
    if (config.method === "put") {
      config.headers["Content-Type"] = "application/json; charset=utf-8";
    }
    config.headers["Accept-Language"] = "zh-Hans";
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug

    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  response => {
    return response;
  },
  error => {
    if (error && error.response) {
      let errorCode = error.response.status;
      if (errorCode == 401) {
        ElMessage({
          message: "用户认证失败，请重新登录",
          grouping: true,
          showClose: true,
          type: "error"
        });
        setTimeout(() => {
          location.href = "/index.html#/login";
        }, 1000);
      } else if (errorCode == 404 || errorCode >= 500) {
        // 跳转404页面
        let message = "系统未找到您想要的资源！";
        if (
          error.response.data.error &&
          error.response.data.error.message != ""
        ) {
          message = error.response.data.error.message;
        }

        ElMessage({
          message: /不存在/g.test(message) ? "信息已经被删除！" : message,
          grouping: true,
          showClose: true,
          type: "error"
        });
      } else if (errorCode == 403) {
        let message = "未查询到数据，因为您没有权限！请联系管理员！";
        if (
          error.response.data.error &&
          error.response.data.error.message != ""
        ) {
          message = error.response.data.error.message;
        }

        ElMessage({
          message: message,
          grouping: true,
          showClose: true,
          type: "error"
        });
        if (message.includes("用户未登录")) {
          setTimeout(() => {
            location.href = "/index.html#/login";
          }, 1000);
        }
      } else {
        let message = "发生异常！请稍后重试或联系系统管理员解决。";
        if (
          error.response.data.error &&
          error.response.data.error.message != ""
        ) {
          message = error.response.data.error.message;
        }
        ElMessage({
          message: message,
          grouping: true,
          showClose: true,
          type: "error"
        });
      }

      return Promise.reject(error.response.data.error);
    }

    return Promise.reject(error);
  }
);
service.mock = function (apis) {
  const resApis = {};
  Object.entries(apis).forEach(([key, value]) => {
    resApis[key] = value(true);
  });
  return { mock: resApis };
};
service.exec = function (apis) {
  const resApis = {};
  Object.entries(apis).forEach(([key, value]) => {
    resApis[key] = value();
  });
  return resApis;
};

export default service;
