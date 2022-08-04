import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{ProductId:string;Name?:string;ProductionDate?:string;ExpireDate?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/batch-number",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/batch-number/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{productId:string;name:string;productionDate:string;expireDate:string;[key: string]: unknown;})=> {return request({url: "/IWS/batch-number",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;productId:string;name:string;productionDate:string;expireDate:string;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/batch-number",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/batch-number/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete};
export default apis;