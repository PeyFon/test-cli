import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/identity/users/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetList = ismock=>data=> {return request({url: "/identity/users",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/identity/users",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/identity/users/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/identity/users/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const GetRoles = ismock=>data=> {return request({url: "/identity/users/"+data+"/roles",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetAssignableRoles = ismock=>data=> {return request({url: "/identity/users/assignable-roles",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateRoles = ismock=>data=> {return request({url: "/identity/users/"+data.id+"/roles",method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const FindByUsername = ismock=>data=> {return request({url: "/identity/users/by-username/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const FindByEmail = ismock=>data=> {return request({url: "/identity/users/by-email/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetList,Create,Update,Delete,GetRoles,GetAssignableRoles,UpdateRoles,FindByUsername,FindByEmail};
export default {...(request.exec(apis)),...(request.mock(apis))};