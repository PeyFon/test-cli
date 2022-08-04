import {AwingIWSPMFileDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{BrandId?:string;BrandName?:string;ManufacturerId?:string;Manufacturer?:string;IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/equipment-brand-model",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Export = (data:{BrandId?:string;BrandName?:string;ManufacturerId?:string;Manufacturer?:string;IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/equipment-brand-model/export",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{brandId:string;modelName:string;equipmentTypeId:string;remark?:string;filesList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/equipment-brand-model",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/equipment-brand-model/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{brandId:string;modelName:string;equipmentTypeId:string;remark?:string;filesList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;}})=> {return request({url: "/IWS/equipment-brand-model/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/equipment-brand-model/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSelect = (data:{brandId:string;})=> {return request({url: "/IWS/equipment-brand-model/select/"+data.brandId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateActive = (data:{id:string;_params:{active?:boolean;};})=> {return request({url: "/IWS/equipment-brand-model/"+data.id+"/active",method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const GetDealerModelStat = (data:{id:string;_params:{DealerName?:string;SkipCount?:number;MaxResultCount?:number;};})=> {return request({url: "/IWS/equipment-brand-model/"+data.id+"/dealer-model-stat",method:"get",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Export,Create,Delete,Update,Get,GetSelect,UpdateActive,GetDealerModelStat};
export default apis;