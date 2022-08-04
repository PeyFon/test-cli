import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = (data:{id:string;})=> {return request({url: "/identity/users/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{Filter?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/identity/users",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{extraProperties?:object;userName:string;name?:string;surname?:string;email:string;phoneNumber?:string;isActive:boolean;lockoutEnabled:boolean;roleNames?:Array<string>;password:string;[key: string]: unknown;})=> {return request({url: "/identity/users",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{extraProperties?:object;userName:string;name?:string;surname?:string;email:string;phoneNumber?:string;isActive:boolean;lockoutEnabled:boolean;roleNames?:Array<string>;password?:string;concurrencyStamp?:string;[key: string]: unknown;}})=> {return request({url: "/identity/users/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/identity/users/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetRoles = (data:{id:string;})=> {return request({url: "/identity/users/"+data.id+"/roles",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetAssignableRoles = ()=> {return request({url: "/identity/users/assignable-roles",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateRoles = (data:{id:string;_body:{roleNames:Array<string>;[key: string]: unknown;}})=> {return request({url: "/identity/users/"+data.id+"/roles",method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const FindByUsername = (data:{userName:string;})=> {return request({url: "/identity/users/by-username/"+data.userName,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const FindByEmail = (data:{email:string;})=> {return request({url: "/identity/users/by-email/"+data.email,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetList,Create,Update,Delete,GetRoles,GetAssignableRoles,UpdateRoles,FindByUsername,FindByEmail};
export default apis;