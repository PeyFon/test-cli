import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = (data:{id:string;})=> {return request({url: "/IWS/repair-order/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetExt = (data:{id:string;})=> {return request({url: "/IWS/repair-order/"+data.id+"/ext",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetFlowList = (data:{id:string;})=> {return request({url: "/IWS/repair-order/"+data.id+"/flow-list",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetFaultSelectList = (data:{equipmentTypeId:string;})=> {return request({url: "/IWS/repair-order/fault-select-list/"+data.equipmentTypeId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetPrevFaultSelectList = (data:{equipmentTypeId?:string;faultId?:string;})=> {return request({url: "/IWS/repair-order/prev-fault-select-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetReasonSelectList = (data:{faultId:string;})=> {return request({url: "/IWS/repair-order/reason-select-list/"+data.faultId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSolutionSelectList = (data:{reasonId:string;})=> {return request({url: "/IWS/repair-order/solution-select-list/"+data.reasonId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{OrderSource?:1|2|3|4;Code?:string;EquipmentCode?:string;EquipmentName?:string;RepairRespName?:string;OrderStartTime_Start?:string;OrderStartTime_End?:string;OrderEndTime_Start?:string;OrderEndTime_End?:string;FaultDescription?:string;SolutionDescription?:string;OrderStatus?:1|2|3|4|5|6|7|8|9;MenuType?:number;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetExt,GetFlowList,GetFaultSelectList,GetPrevFaultSelectList,GetReasonSelectList,GetSolutionSelectList,GetList};
export default apis;