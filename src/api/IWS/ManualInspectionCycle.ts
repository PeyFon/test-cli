import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{PlanCode?:string;PlanName?:string;RespName?:string;Players?:string;StartDate?:string;EndDate?:string;Position?:string;IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/manual-inspection-cycle",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateActive = (data:{id:string;_params:{active?:boolean;};})=> {return request({url: "/IWS/manual-inspection-cycle/"+data.id+"/active",method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{planName:string;respId:string;playerIds?:Array<string>;startDate:string;endDate:string;cycleNum:number;cycleType:string;firstStartTime:string;durationNum:number;durationType:string;warnCycleNum:number;warnCycleType:string;warnUserIds:Array<string>;schemeId:string;isActive:boolean;[key: string]: unknown;})=> {return request({url: "/IWS/manual-inspection-cycle",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{planName:string;respId:string;playerIds?:Array<string>;startDate:string;endDate:string;cycleNum:number;cycleType:string;firstStartTime:string;durationNum:number;durationType:string;warnCycleNum:number;warnCycleType:string;warnUserIds:Array<string>;schemeId:string;isActive:boolean;[key: string]: unknown;}})=> {return request({url: "/IWS/manual-inspection-cycle/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/manual-inspection-cycle/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/manual-inspection-cycle/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GenerateTask = ()=> {return request({url: "/IWS/manual-inspection-cycle/generate-task",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,UpdateActive,Create,Update,Delete,Get,GenerateTask};
export default apis;