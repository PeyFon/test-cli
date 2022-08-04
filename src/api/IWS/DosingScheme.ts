import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{targetId?:string;})=> {return request({url: "/IWS/dosing-scheme",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/dosing-scheme/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{targetId:string;name?:string;[key: string]: unknown;})=> {return request({url: "/IWS/dosing-scheme",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;targetId:string;name?:string;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/dosing-scheme",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/dosing-scheme/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetDosingModel = (data:{targetId:string;_params:{intervalValue?:number;waterYield?:number;};})=> {return request({url: "/IWS/dosing-scheme/dosing-model/"+data.targetId,method:"get",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,GetDosingModel};
export default apis;