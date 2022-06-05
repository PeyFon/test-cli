import request from "@/requests/interface";

const GetAllList = ismock=>data=> {return request({url: "/identity/roles/all",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetList = ismock=>data=> {return request({url: "/identity/roles",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/identity/roles/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/identity/roles",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/identity/roles/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/identity/roles/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};

const apis = {GetAllList,GetList,Get,Create,Update,Delete};
export default {...(request.exec(apis)),...(request.mock(apis))};