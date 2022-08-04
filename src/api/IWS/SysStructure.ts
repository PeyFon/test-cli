import {AwingIWSSysPositionType} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{name:string;parentId?:string;[key: string]: unknown;})=> {return request({url: "/IWS/sys-structure",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/sys-structure/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;name:string;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/sys-structure",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/sys-structure/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const MoveTo = (data:{id:string;relativeId:string;position:AwingIWSSysPositionType;[key: string]: unknown;})=> {return request({url: "/IWS/sys-structure/move-to",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetTrees = (data:{ParentId?:string;})=> {return request({url: "/IWS/sys-structure/trees",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetStructureUserList = (data:{StructureId:string;_params:{UserName?:string;Name?:string;Sex?:number;PhoneNumber?:string;SkipCount?:number;MaxResultCount?:number;};})=> {return request({url: "/IWS/sys-structure/structure-user-list/"+data.StructureId,method:"get",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const GetUserTrees = ()=> {return request({url: "/IWS/sys-structure/user-trees",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetUserStructureIdList = ()=> {return request({url: "/IWS/sys-structure/user-structure-id-list",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,MoveTo,GetTrees,GetStructureUserList,GetUserTrees,GetUserStructureIdList};
export default apis;