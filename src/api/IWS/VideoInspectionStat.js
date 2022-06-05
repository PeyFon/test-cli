import request from "@/requests/interface";

const GetSummaryStat = ismock=>data=> {return request({url: "/IWS/video-inspection-stat/summary-stat",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetCompletedRateStat = ismock=>data=> {return request({url: "/IWS/video-inspection-stat/completed-rate-stat",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetFaultComparedStat = ismock=>data=> {return request({url: "/IWS/video-inspection-stat/fault-compared-stat",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetSummaryStat,GetCompletedRateStat,GetFaultComparedStat};
export default {...(request.exec(apis)),...(request.mock(apis))};