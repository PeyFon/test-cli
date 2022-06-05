import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/dosing-scheme",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/dosing-scheme/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/dosing-scheme",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/dosing-scheme",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/dosing-scheme/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const GetDosingModel = ismock=>data=> {return request({url: "/IWS/dosing-scheme/dosing-model/"+data.targetId,method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,GetDosingModel};
export default {...(request.exec(apis)),...(request.mock(apis))};