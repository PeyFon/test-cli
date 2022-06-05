import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/abp/application-configuration",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {Get};
export default {...(request.exec(apis)),...(request.mock(apis))};