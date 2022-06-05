import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/maintain-plan",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/maintain-plan",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/maintain-plan/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/maintain-plan",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/maintain-plan/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const SelectEquipmentInfoBy = ismock=>data=> {return request({url: "/IWS/maintain-plan/select-equipment-info-by",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetEquipment = ismock=>data=> {return request({url: "/IWS/maintain-plan/equipment/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Create,Get,Update,Delete,SelectEquipmentInfoBy,GetEquipment};
export default {...(request.exec(apis)),...(request.mock(apis))};