import {AwingIWSMedicamentManageDosingRecordDetailDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{DosingCraftNames?:string;WaterYield?:number;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/dosing-record",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/dosing-record/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{dosingDate:string;dosingCraftIdList?:Array<string>;waterYield:number;actingTime:number;productDetailList:Array<AwingIWSMedicamentManageDosingRecordDetailDto>;[key: string]: unknown;})=> {return request({url: "/IWS/dosing-record",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;dosingDate:string;dosingCraftIdList?:Array<string>;waterYield:number;actingTime:number;productDetailList:Array<AwingIWSMedicamentManageDosingRecordDetailDto>;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/dosing-record",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/dosing-record/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Export = (data:{DosingCraftNames?:string;WaterYield?:number;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/dosing-record/export",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetWaterQualityChangeList = (data:{id:string;})=> {return request({url: "/IWS/dosing-record/"+data.id+"/water-quality-change-list",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,GetWaterQualityChangeList};
export default apis;