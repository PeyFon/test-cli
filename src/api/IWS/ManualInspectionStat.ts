import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetSummaryStat = ()=> {return request({url: "/IWS/manual-inspection-stat/summary-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetCompletedRateStat = (data:{StartMonth?:string;EndMonth?:string;})=> {return request({url: "/IWS/manual-inspection-stat/completed-rate-stat",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetOrderChangeRateStat = (data:{StartMonth?:string;EndMonth?:string;})=> {return request({url: "/IWS/manual-inspection-stat/order-change-rate-stat",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetFaultComparedStat = (data:{StartMonth?:string;EndMonth?:string;})=> {return request({url: "/IWS/manual-inspection-stat/fault-compared-stat",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetFaultEquipmentTypeStat = (data:{StartMonth?:string;EndMonth?:string;})=> {return request({url: "/IWS/manual-inspection-stat/fault-equipment-type-stat",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetInspectionRankStat = (data:{StartMonth?:string;EndMonth?:string;Name?:string;DepartmentName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/manual-inspection-stat/inspection-rank-stat",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetSummaryStat,GetCompletedRateStat,GetOrderChangeRateStat,GetFaultComparedStat,GetFaultEquipmentTypeStat,GetInspectionRankStat};
export default apis;