import {AwingIWSPMFileDto,AwingIWSMedicamentManageInStorageDetailDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{ProductName?:string;BatchNumberName?:string;InStorageUserName?:string;SupplierName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/in-storage",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/in-storage/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{inStorageTime:string;inStorageUserId:string;inStorageType:string;supplierId:string;totalAmount:number;remark?:string;filesList?:Array<AwingIWSPMFileDto>;inStorageDetailList:Array<AwingIWSMedicamentManageInStorageDetailDto>;operate:number;[key: string]: unknown;})=> {return request({url: "/IWS/in-storage",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;inStorageTime:string;inStorageUserId:string;inStorageType:string;supplierId:string;totalAmount:number;remark?:string;filesList?:Array<AwingIWSPMFileDto>;inStorageDetailList:Array<AwingIWSMedicamentManageInStorageDetailDto>;operate:number;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/in-storage",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/in-storage/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Export = (data:{ProductName?:string;BatchNumberName?:string;InStorageUserName?:string;SupplierName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/in-storage/export",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export};
export default apis;