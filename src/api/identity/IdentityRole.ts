import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetAllList = ()=> {return request({url: "/identity/roles/all",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{Filter?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/identity/roles",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/identity/roles/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{extraProperties?:object;name:string;isDefault:boolean;isPublic:boolean;[key: string]: unknown;})=> {return request({url: "/identity/roles",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{extraProperties?:object;name:string;isDefault:boolean;isPublic:boolean;concurrencyStamp?:string;[key: string]: unknown;}})=> {return request({url: "/identity/roles/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/identity/roles/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetAllList,GetList,Get,Create,Update,Delete};
export default apis;