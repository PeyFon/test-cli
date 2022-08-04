import {AwingIWSEquipmentOMFaultLevel} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{Code?:string;Description?:string;Level?:1|2|3;IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/fault-info",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/fault-info/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{notCoveredFaultId?:string;description:string;level:AwingIWSEquipmentOMFaultLevel;isActive:boolean;[key: string]: unknown;})=> {return request({url: "/IWS/fault-info",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;description:string;level:AwingIWSEquipmentOMFaultLevel;isActive:boolean;concurrencyStamp?:string;[key: string]: unknown;})=> {return request({url: "/IWS/fault-info",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const DeleteCheck = (data:{id:string;})=> {return request({url: "/IWS/fault-info/"+data.id+"/check",method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/fault-info/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetFaultRecordList = (data:{FaultId?:string;RepairCode?:string;RepairRespName?:string;ReasonDescription?:string;SolutionDescription?:string;OrderTime_Start?:string;OrderTime_End?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/fault-info/fault-record-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,DeleteCheck,Delete,GetFaultRecordList};
export default apis;