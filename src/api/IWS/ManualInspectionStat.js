import request from "@/requests/interface";

const GetSummaryStat = ismock=>data=> {return request({url: "/IWS/manual-inspection-stat/summary-stat",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetCompletedRateStat = ismock=>data=> {return request({url: "/IWS/manual-inspection-stat/completed-rate-stat",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetOrderChangeRateStat = ismock=>data=> {return request({url: "/IWS/manual-inspection-stat/order-change-rate-stat",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetFaultComparedStat = ismock=>data=> {return request({url: "/IWS/manual-inspection-stat/fault-compared-stat",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetFaultEquipmentTypeStat = ismock=>data=> {return request({url: "/IWS/manual-inspection-stat/fault-equipment-type-stat",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetInspectionRankStat = ismock=>data=> {return request({url: "/IWS/manual-inspection-stat/inspection-rank-stat",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetSummaryStat,GetCompletedRateStat,GetOrderChangeRateStat,GetFaultComparedStat,GetFaultEquipmentTypeStat,GetInspectionRankStat};
export default {...(request.exec(apis)),...(request.mock(apis))};