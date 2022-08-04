import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{OrderSource?:1|2|3|4;Code?:string;EquipmentCode?:string;EquipmentName?:string;RepairRespId?:string;RepairRespName?:string;RepairCost?:number;RecordSubmitTime_Start?:string;RecordSubmitTime_End?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order-check",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateCheck = (data:{orderId:string;checkStatus:number;checkRemark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-check/check",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetRecord = (data:{id:string;})=> {return request({url: "/IWS/repair-order-check/"+data.id+"/record",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateCheck,GetRecord};
export default apis;