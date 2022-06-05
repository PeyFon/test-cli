import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/IWS/repair-order/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetFlowList = ismock=>data=> {return request({url: "/IWS/repair-order/"+data+"/flow-list",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetFaultSelectList = ismock=>data=> {return request({url: "/IWS/repair-order/fault-select-list/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetReasonSelectList = ismock=>data=> {return request({url: "/IWS/repair-order/reason-select-list/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetSolutionSelectList = ismock=>data=> {return request({url: "/IWS/repair-order/solution-select-list/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetList = ismock=>data=> {return request({url: "/IWS/repair-order",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetFlowList,GetFaultSelectList,GetReasonSelectList,GetSolutionSelectList,GetList};
export default {...(request.exec(apis)),...(request.mock(apis))};