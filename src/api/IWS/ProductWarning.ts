import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{ProductName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-warning",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/product-warning/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{type:string;productId:string;superiorLimit?:number;inferiorLimit?:number;[key: string]: unknown;})=> {return request({url: "/IWS/product-warning",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;type:string;productId:string;superiorLimit?:number;inferiorLimit?:number;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/product-warning",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/product-warning/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const SendStockWarningMessage = ()=> {return request({url: "/IWS/product-warning/send-stock-warning-message",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,SendStockWarningMessage};
export default apis;