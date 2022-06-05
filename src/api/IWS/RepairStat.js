import request from "@/requests/interface";

const GetBaseData = ismock=>data=> {return request({url: "/IWS/repair-stat/base-data",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetRepairAcceptAbility = ismock=>data=> {return request({url: "/IWS/repair-stat/repair-accept-ability",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetRepairerSort = ismock=>data=> {return request({url: "/IWS/repair-stat/repairer-sort",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetOrderCompleteAbilityAnalyze = ismock=>data=> {return request({url: "/IWS/repair-stat/order-complete-ability-analyze",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetEquipmentFaultAnalyze = ismock=>data=> {return request({url: "/IWS/repair-stat/equipment-fault-analyze",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetBaseData,GetRepairAcceptAbility,GetRepairerSort,GetOrderCompleteAbilityAnalyze,GetEquipmentFaultAnalyze};
export default {...(request.exec(apis)),...(request.mock(apis))};