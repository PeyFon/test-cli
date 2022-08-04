import {AwingIWSSysPositionType} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{name:string;parentId?:string;relatedModel?:string;[key: string]: unknown;})=> {return request({url: "/IWS/facility",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/facility/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;name:string;relatedModel?:string;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/facility",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/facility/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const MoveTo = (data:{id:string;relativeId:string;position:AwingIWSSysPositionType;[key: string]: unknown;})=> {return request({url: "/IWS/facility/move-to",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetTrees = (data:{ParentId?:string;})=> {return request({url: "/IWS/facility/trees",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,MoveTo,GetTrees};
export default apis;