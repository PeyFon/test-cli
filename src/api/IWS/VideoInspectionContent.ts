import {AwingIWSVideoInspectionContentItemDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/video-inspection-content",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetValidList = (data:{MaxResultCount?:number;SkipCount?:number;})=> {return request({url: "/IWS/video-inspection-content/valid-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateActive = (data:{id:string;_params:{active?:boolean;};})=> {return request({url: "/IWS/video-inspection-content/"+data.id+"/active",method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{cameraId:string;remark?:string;items?:Array<AwingIWSVideoInspectionContentItemDto>;[key: string]: unknown;})=> {return request({url: "/IWS/video-inspection-content",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{cameraId:string;remark?:string;items?:Array<AwingIWSVideoInspectionContentItemDto>;[key: string]: unknown;}})=> {return request({url: "/IWS/video-inspection-content/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/video-inspection-content/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/video-inspection-content/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetValidList,UpdateActive,Create,Update,Delete,Get};
export default apis;