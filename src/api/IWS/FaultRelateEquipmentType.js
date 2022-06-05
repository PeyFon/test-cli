import request from "@/requests/interface";

const GetFaultList = ismock=>data=> {return request({url: "/IWS/fault-relate-equipment-type/fault-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetNoFaultList = ismock=>data=> {return request({url: "/IWS/fault-relate-equipment-type/no-fault-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const BatchInsert = ismock=>data=> {return request({url: "/IWS/fault-relate-equipment-type/batch-insert",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const BatchRemove = ismock=>data=> {return request({url: "/IWS/fault-relate-equipment-type/batch-remove",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetFaultSelectList = ismock=>data=> {return request({url: "/IWS/fault-relate-equipment-type/fault-select-list/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetFaultList,GetNoFaultList,BatchInsert,BatchRemove,GetFaultSelectList};
export default {...(request.exec(apis)),...(request.mock(apis))};