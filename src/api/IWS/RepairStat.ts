import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetBaseData = ()=> {return request({url: "/IWS/repair-stat/base-data",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetRepairAcceptAbility = (data:{StartTime?:string;EndTime?:string;})=> {return request({url: "/IWS/repair-stat/repair-accept-ability",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetRepairerSort = (data:{StartTime?:string;EndTime?:string;Repairer?:string;DeptName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-stat/repairer-sort",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetOrderCompleteAbilityAnalyze = (data:{Type?:number;DeptIdList?:Array<string>;StartTime?:string;EndTime?:string;})=> {return request({url: "/IWS/repair-stat/order-complete-ability-analyze",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetEquipmentFaultAnalyze = (data:{StartTime?:string;EndTime?:string;})=> {return request({url: "/IWS/repair-stat/equipment-fault-analyze",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetFaultAnalyze = ()=> {return request({url: "/IWS/repair-stat/fault-analyze",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetBaseData,GetRepairAcceptAbility,GetRepairerSort,GetOrderCompleteAbilityAnalyze,GetEquipmentFaultAnalyze,GetFaultAnalyze};
export default apis;