import {AwingIWSMedicamentManageCheckScope,AwingIWSMedicamentManageProductCheckDetailDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{Code?:string;CheckUserName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-check",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/product-check/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{checkType:string;checkScope:AwingIWSMedicamentManageCheckScope;checkUserId:string;checkTime:string;remark?:string;checkDetailList:Array<AwingIWSMedicamentManageProductCheckDetailDto>;operate:number;[key: string]: unknown;})=> {return request({url: "/IWS/product-check",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;checkType:string;checkScope:AwingIWSMedicamentManageCheckScope;checkUserId:string;checkTime:string;remark?:string;checkDetailList:Array<AwingIWSMedicamentManageProductCheckDetailDto>;operate:number;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/product-check",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/product-check/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Export = (data:{Code?:string;CheckUserName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-check/export",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetCheckDetail = (data:{CheckId?:string;CheckScope?:0|1|2;CheckType?:string;})=> {return request({url: "/IWS/product-check/check-detail",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetCheckSelectType = (data:{ParentId?:string;})=> {return request({url: "/IWS/product-check/check-select-type",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,GetCheckDetail,GetCheckSelectType};
export default apis;