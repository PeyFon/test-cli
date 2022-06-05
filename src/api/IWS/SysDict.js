import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/sys-dict",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/sys-dict/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/sys-dict",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/sys-dict/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetTrees = ismock=>data=> {return request({url: "/IWS/sys-dict/trees",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetSelect = ismock=>data=> {return request({url: "/IWS/sys-dict/select",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,GetTrees,GetSelect};
export default {...(request.exec(apis)),...(request.mock(apis))};