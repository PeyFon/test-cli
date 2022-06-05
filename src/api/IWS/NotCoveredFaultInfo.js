import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/not-covered-fault-info",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/not-covered-fault-info/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const DefinedToFault = ismock=>data=> {return request({url: "/IWS/not-covered-fault-info/defined-to-fault",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,DefinedToFault};
export default {...(request.exec(apis)),...(request.mock(apis))};