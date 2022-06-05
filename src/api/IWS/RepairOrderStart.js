import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/repair-order-start",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetEquipmentList = ismock=>data=> {return request({url: "/IWS/repair-order-start/equipment-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/repair-order-start",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/repair-order-start/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/repair-order-start",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/repair-order-start/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Grade = ismock=>data=> {return request({url: "/IWS/repair-order-start/grade",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetEquipmentList,Create,Get,Update,Delete,Grade};
export default {...(request.exec(apis)),...(request.mock(apis))};