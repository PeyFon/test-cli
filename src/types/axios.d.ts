import "axios";

declare module "axios" {
  interface AxiosInstance {
    mock?: function;
    exec?: function;
  }
}

declare module "axios" {
  interface AxiosRequestConfig {
    ownMethod?: "body" | "formfile" | "undefined";
  }
}
