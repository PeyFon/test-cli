import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/account/my-profile",method: "get",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/account/my-profile",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const ChangePassword = ismock=>data=> {return request({url: "/account/my-profile/change-password",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,Update,ChangePassword};
export default {...(request.exec(apis)),...(request.mock(apis))};