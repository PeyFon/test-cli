import {AwingIWSEquipmentOMFaultSource,AwingIWSPMFileDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{OrderSource?:1|2|3|4;Code?:string;EquipmentCode?:string;EquipmentName?:string;AssignerName?:string;RepairRespName?:string;RepairPlayerNames?:string;EquipmentPosition?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order-running",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateRecord = (data:{orderId:string;faultSource:AwingIWSEquipmentOMFaultSource;faultId?:string;faultDescription?:string;reasonSource:AwingIWSEquipmentOMFaultSource;reasonId?:string;reasonDescription?:string;solutionSource:AwingIWSEquipmentOMFaultSource;solutionId?:string;solutionDescription?:string;repairCost:number;recordRemark?:string;recordImageIdList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-running/record",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateApply = (data:{orderId:string;applyReason?:string;applyContent?:string;faultSource:AwingIWSEquipmentOMFaultSource;faultId?:string;faultDescription?:string;reasonSource:AwingIWSEquipmentOMFaultSource;reasonId?:string;reasonDescription?:string;solutionSource:AwingIWSEquipmentOMFaultSource;solutionId?:string;solutionDescription?:string;applyRemark?:string;applyImageIdList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-running/apply",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateRecord,CreateApply};
export default apis;