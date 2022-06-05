import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/equipment-brand",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/equipment-brand/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/equipment-brand/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/equipment-brand/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetTrees = ismock=>data=> {return request({url: "/IWS/equipment-brand/trees",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetSelect = ismock=>data=> {return request({url: "/IWS/equipment-brand/select/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,GetTrees,GetSelect};
export default {...(request.exec(apis)),...(request.mock(apis))};