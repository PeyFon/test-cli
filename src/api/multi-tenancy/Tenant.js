import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/multi-tenancy/tenants/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetList = ismock=>data=> {return request({url: "/multi-tenancy/tenants",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/multi-tenancy/tenants",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/multi-tenancy/tenants/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/multi-tenancy/tenants/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const GetDefaultConnectionString = ismock=>data=> {return request({url: "/multi-tenancy/tenants/"+data+"/default-connection-string",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateDefaultConnectionString = ismock=>data=> {return request({url: "/multi-tenancy/tenants/"+data.id+"/default-connection-string",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const DeleteDefaultConnectionString = ismock=>data=> {return request({url: "/multi-tenancy/tenants/"+data+"/default-connection-string",method: "delete",baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetList,Create,Update,Delete,GetDefaultConnectionString,UpdateDefaultConnectionString,DeleteDefaultConnectionString};
export default {...(request.exec(apis)),...(request.mock(apis))};