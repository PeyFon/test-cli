import {AwingIWSPMFileDto,AwingIWSMedicamentManageOutStorageDetailDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{ProductName?:string;BatchNumberName?:string;OutStorageUserName?:string;SupplierName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/out-storage",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/out-storage/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{outStorageTime:string;outStorageUserId:string;outStorageType:string;remark?:string;filesList?:Array<AwingIWSPMFileDto>;outStorageDetailList:Array<AwingIWSMedicamentManageOutStorageDetailDto>;operate:number;[key: string]: unknown;})=> {return request({url: "/IWS/out-storage",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;outStorageTime:string;outStorageUserId:string;outStorageType:string;remark?:string;filesList?:Array<AwingIWSPMFileDto>;outStorageDetailList:Array<AwingIWSMedicamentManageOutStorageDetailDto>;operate:number;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/out-storage",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/out-storage/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Export = (data:{ProductName?:string;BatchNumberName?:string;OutStorageUserName?:string;SupplierName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/out-storage/export",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetAmountByProductIdAndBatchNum = (data:{productId?:string;batchNumberId?:string;})=> {return request({url: "/IWS/out-storage/amount-by-product-id-and-batch-num",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,GetAmountByProductIdAndBatchNum};
export default apis;