import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = (data:{id:string;})=> {return request({url: "/multi-tenancy/tenants/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{Filter?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/multi-tenancy/tenants",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{extraProperties?:object;name:string;adminEmailAddress:string;adminPassword:string;[key: string]: unknown;})=> {return request({url: "/multi-tenancy/tenants",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{extraProperties?:object;name:string;concurrencyStamp?:string;[key: string]: unknown;}})=> {return request({url: "/multi-tenancy/tenants/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/multi-tenancy/tenants/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetDefaultConnectionString = (data:{id:string;})=> {return request({url: "/multi-tenancy/tenants/"+data.id+"/default-connection-string",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateDefaultConnectionString = (data:{id:string;_params:{defaultConnectionString?:string;};})=> {return request({url: "/multi-tenancy/tenants/"+data.id+"/default-connection-string",method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const DeleteDefaultConnectionString = (data:{id:string;})=> {return request({url: "/multi-tenancy/tenants/"+data.id+"/default-connection-string",method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetList,Create,Update,Delete,GetDefaultConnectionString,UpdateDefaultConnectionString,DeleteDefaultConnectionString};
export default apis;