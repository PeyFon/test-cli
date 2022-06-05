import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetRoles = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/"+data+"/roles",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetAssignableRoles = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/assignable-roles",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateRoles = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/"+data.id+"/roles",method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const FindByUsername = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/find-by-username",method: "post",params: data,baseURL:ismock ?"/mock": undefined})};
const FindByEmail = ismock=>data=> {return request({url: "/IWS/i-wSIdentity-user/find-by-email",method: "post",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Delete,Create,Update,Get,GetRoles,GetAssignableRoles,UpdateRoles,FindByUsername,FindByEmail};
export default {...(request.exec(apis)),...(request.mock(apis))};