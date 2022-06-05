import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/fault-info",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/fault-info/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/fault-info",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/fault-info",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/fault-info/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const GetFaultRecordList = ismock=>data=> {return request({url: "/IWS/fault-info/fault-record-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,GetFaultRecordList};
export default {...(request.exec(apis)),...(request.mock(apis))};