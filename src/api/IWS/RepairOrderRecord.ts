import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{OrderSource?:1|2|3|4;Code?:string;EquipmentCode?:string;EquipmentName?:string;RepairRespName?:string;OrderStartTime_Start?:string;OrderStartTime_End?:string;OrderEndTime_Start?:string;OrderEndTime_End?:string;FaultDescription?:string;SolutionDescription?:string;OrderStatus?:1|2|3|4|5|6|7|8|9;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order-record",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateOutsource = (data:{id:string;outsourcer:string;outsourceCost:number;outsourceStartTime?:string;outsourceEndTime?:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-record/outsource",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const ExportExcel = (data:{OrderSource?:1|2|3|4;Code?:string;EquipmentCode?:string;EquipmentName?:string;RepairRespName?:string;OrderStartTime_Start?:string;OrderStartTime_End?:string;OrderEndTime_Start?:string;OrderEndTime_End?:string;FaultDescription?:string;SolutionDescription?:string;OrderStatus?:1|2|3|4|5|6|7|8|9;})=> {return request({url: "/IWS/repair-order-record/export-excel",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateOutsource,ExportExcel};
export default apis;