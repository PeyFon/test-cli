import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetAllRole = ()=> {return request({url: "/IWS/roles/role",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetListNormalRoles = (data:{MaxResultCount?:number;SkipCount?:number;})=> {return request({url: "/IWS/roles/normal-roles",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetRole = (data:{id:string;})=> {return request({url: "/IWS/roles/"+data.id+"/role",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{name?:string;isDefault?:boolean;isPublic?:boolean;builtIn:boolean;[key: string]: unknown;})=> {return request({url: "/IWS/roles",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/roles/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{name?:string;isDefault?:boolean;isPublic?:boolean;builtIn:boolean;concurrencyStamp?:string;[key: string]: unknown;}})=> {return request({url: "/IWS/roles/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {GetAllRole,GetListNormalRoles,GetRole,Create,Delete,Update};
export default apis;