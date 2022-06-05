import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/equipment-info",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Export = ismock=>data=> {return request({url: "/IWS/equipment-info/export",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetKPIList = ismock=>data=> {return request({url: "/IWS/equipment-info/k-pIList",method: "get",baseURL:ismock ?"/mock": undefined})};
const SetKPI = ismock=>data=> {return request({url: "/IWS/equipment-info/set-kPI",method: "post",baseURL:ismock ?"/mock": undefined})};
const UpdateActive = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data.id+"/active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/equipment-info",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetRepairedRecordList = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data.id+"/repaired-record-list",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetInspectionRecordList = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data.id+"/inspection-record-list",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetMaintainRecordList = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data.id+"/maintain-record-list",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetAssetStatusRecordList = ismock=>data=> {return request({url: "/IWS/equipment-info/"+data.id+"/asset-status-record-list",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Export,GetKPIList,SetKPI,UpdateActive,Create,Update,Delete,Get,GetRepairedRecordList,GetInspectionRecordList,GetMaintainRecordList,GetAssetStatusRecordList};
export default {...(request.exec(apis)),...(request.mock(apis))};