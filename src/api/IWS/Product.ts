import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{Name?:string;Type?:string;IsActive?:boolean;SupplierName?:string;BrandName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/product/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{name:string;type:string;productModel?:string;describe?:string;supplierId?:string;brandId?:string;registrationCertificate?:string;shelfLife?:number;storageCondition?:string;storageTransTemperature?:string;targetInfluence?:string;unit?:string;isActive:boolean;[key: string]: unknown;})=> {return request({url: "/IWS/product",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;name:string;type:string;productModel?:string;describe?:string;supplierId?:string;brandId?:string;registrationCertificate?:string;shelfLife?:number;storageCondition?:string;storageTransTemperature?:string;targetInfluence?:string;unit?:string;isActive:boolean;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/product",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/product/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Export = (data:{Name?:string;Type?:string;IsActive?:boolean;SupplierName?:string;BrandName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product/export",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const DownloadTemplate = ()=> {return request({url: "/IWS/product/download-template",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Import = (data:{fileId:string;})=> {return request({url: "/IWS/product/import/"+data.fileId,method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const ImportNoActive = (data:{fileId:string;})=> {return request({url: "/IWS/product/import-no-active/"+data.fileId,method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSelect = ()=> {return request({url: "/IWS/product/select",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSelectHasPara = (data:{Name?:string;Type?:string;IsActive?:boolean;SupplierName?:string;BrandName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product/select-has-para",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateActive = (data:{id:string;_params:{active?:boolean;};})=> {return request({url: "/IWS/product/"+data.id+"/active",method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,DownloadTemplate,Import,ImportNoActive,GetSelect,GetSelectHasPara,UpdateActive};
export default apis;