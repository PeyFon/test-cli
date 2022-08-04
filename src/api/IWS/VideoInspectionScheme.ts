import {AwingIWSCreateVideoInspectionSchemeItemDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{SchemeName?:string;Position?:string;IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/video-inspection-scheme",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetSchemeSelect = ()=> {return request({url: "/IWS/video-inspection-scheme/scheme-select",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateActive = (data:{id:string;_params:{active?:boolean;};})=> {return request({url: "/IWS/video-inspection-scheme/"+data.id+"/active",method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{schemeName:string;position:string;isActive:boolean;remark?:string;items?:Array<AwingIWSCreateVideoInspectionSchemeItemDto>;[key: string]: unknown;})=> {return request({url: "/IWS/video-inspection-scheme",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetSimpleList = (data:{EquipmentCode?:string;EquipmentName?:string;EquipmentTypeId?:string;ModelName?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/video-inspection-scheme/simple-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{schemeName:string;position:string;isActive:boolean;remark?:string;items?:Array<AwingIWSCreateVideoInspectionSchemeItemDto>;[key: string]: unknown;}})=> {return request({url: "/IWS/video-inspection-scheme/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/video-inspection-scheme/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/video-inspection-scheme/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const CheckNow = (data:{id:string;})=> {return request({url: "/IWS/video-inspection-scheme/"+data.id+"/check-now",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetSchemeSelect,UpdateActive,Create,GetSimpleList,Update,Delete,Get,CheckNow};
export default apis;