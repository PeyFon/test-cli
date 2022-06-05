import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/in-storage",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/in-storage/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/in-storage",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/in-storage",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/in-storage/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Export = ismock=>data=> {return request({url: "/IWS/in-storage/export",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export};
export default {...(request.exec(apis)),...(request.mock(apis))};