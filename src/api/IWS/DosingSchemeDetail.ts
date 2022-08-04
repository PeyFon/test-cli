import {AwingIWSPMFileDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{dosingSchemeId?:string;productName?:string;})=> {return request({url: "/IWS/dosing-scheme-detail",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/dosing-scheme-detail/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{schemeId:string;step?:number;productId:string;dosage:number;actingTime:number;filesList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/dosing-scheme-detail",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;schemeId:string;step?:number;productId:string;dosage:number;actingTime:number;filesList?:Array<AwingIWSPMFileDto>;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/dosing-scheme-detail",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/dosing-scheme-detail/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete};
export default apis;