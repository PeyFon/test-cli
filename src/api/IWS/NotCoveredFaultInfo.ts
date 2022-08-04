import {AwingIWSEquipmentOMFaultLevel} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{RepairCode?:string;FaultDescription?:string;ReasonDescription?:string;SolutionDescription?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/not-covered-fault-info",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/not-covered-fault-info/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const DefinedToFault = (data:{notCoveredFaultId?:string;description:string;level:AwingIWSEquipmentOMFaultLevel;isActive:boolean;[key: string]: unknown;})=> {return request({url: "/IWS/not-covered-fault-info/defined-to-fault",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,DefinedToFault};
export default apis;