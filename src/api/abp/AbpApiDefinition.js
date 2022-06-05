import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/abp/api-definition",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get};
export default {...(request.exec(apis)),...(request.mock(apis))};