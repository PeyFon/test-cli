import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/audit-log",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetCount = ismock=>data=> {return request({url: "/IWS/audit-log/count",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetAverageExecutionDurationPerDay = ismock=>data=> {return request({url: "/IWS/audit-log/average-execution-duration-per-day",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetCount,GetAverageExecutionDurationPerDay};
export default {...(request.exec(apis)),...(request.mock(apis))};