import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/dosing-scheme-detail",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/dosing-scheme-detail/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/dosing-scheme-detail",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/dosing-scheme-detail",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/dosing-scheme-detail/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete};
export default {...(request.exec(apis)),...(request.mock(apis))};