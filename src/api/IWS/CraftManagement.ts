import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetPageList = (data:{Name?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/craft-management/page-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{Name?:string;})=> {return request({url: "/IWS/craft-management",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/craft-management/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{name:string;remark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/craft-management",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;name:string;remark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/craft-management",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/craft-management/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetPageList,GetList,Get,Create,Update,Delete};
export default apis;