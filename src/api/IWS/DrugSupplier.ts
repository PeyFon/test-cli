import {AwingIWSPMFileDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{Name?:string;Type?:number;SupplierStatus?:0|1|2;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/drug-supplier",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/drug-supplier/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{name:string;unifiedSocialCreditCode:string;expiryTime?:string;productionCertificate?:string;expiryTime2?:string;brandIds?:Array<string>;remark?:string;type:number;isActive:boolean;filesList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/drug-supplier",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;name:string;unifiedSocialCreditCode:string;expiryTime?:string;productionCertificate?:string;expiryTime2?:string;brandIds?:Array<string>;remark?:string;type:number;isActive:boolean;filesList?:Array<AwingIWSPMFileDto>;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/drug-supplier",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/drug-supplier/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Export = (data:{Name?:string;Type?:number;SupplierStatus?:0|1|2;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/drug-supplier/export",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetSelect = (data:{type?:number;})=> {return request({url: "/IWS/drug-supplier/select",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateActive = (data:{id:string;_params:{active?:boolean;};})=> {return request({url: "/IWS/drug-supplier/"+data.id+"/active",method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const GetBrandListBySupplier = (data:{id:string;})=> {return request({url: "/IWS/drug-supplier/"+data.id+"/brand-list-by-supplier",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,GetSelect,UpdateActive,GetBrandListBySupplier};
export default apis;