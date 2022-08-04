import {AwingIWSEquipmentOMOrderSource,AwingIWSEquipmentOMFaultSource,AwingIWSPMFileDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{OrderSource?:1|2|3|4;Code?:string;EquipmentCode?:string;EquipmentName?:string;OrderStatus?:1|2|3|4|5|6|7|8|9;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order-start",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetEquipmentList = (data:{EquipmentCode?:string;EquipmentName?:string;EquipmentModelName?:string;EquipmentPosition?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order-start/equipment-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{orderSource:AwingIWSEquipmentOMOrderSource;orderSourceId?:string;equipmentId:string;faultSource:AwingIWSEquipmentOMFaultSource;faultId?:string;faultDescription?:string;questionRemark?:string;startImageIdList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-start",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;equipmentId:string;faultSource:AwingIWSEquipmentOMFaultSource;faultId?:string;faultDescription?:string;questionRemark?:string;startImageIdList?:Array<AwingIWSPMFileDto>;concurrencyStamp?:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-start",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/repair-order-start/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Grade = (data:{id:string;evaluateLevel:number;evaluateContent:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-start/grade",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetEquipmentList,Create,Update,Delete,Grade};
export default apis;