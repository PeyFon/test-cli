import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/dosing-record",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/dosing-record/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/dosing-record",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/dosing-record",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/dosing-record/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Export = ismock=>data=> {return request({url: "/IWS/dosing-record/export",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetWaterQualityChangeList = ismock=>data=> {return request({url: "/IWS/dosing-record/"+data+"/water-quality-change-list",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,GetWaterQualityChangeList};
export default {...(request.exec(apis)),...(request.mock(apis))};