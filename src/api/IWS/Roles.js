import request from "@/requests/interface";

const GetAllRole = ismock=>data=> {return request({url: "/IWS/roles/role",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetListNormalRoles = ismock=>data=> {return request({url: "/IWS/roles/normal-roles",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetRole = ismock=>data=> {return request({url: "/IWS/roles/"+data+"/role",method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/roles",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/roles/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/roles?Id="+data.Id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetAllRole,GetListNormalRoles,GetRole,Create,Delete,Update};
export default {...(request.exec(apis)),...(request.mock(apis))};