import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{name:string;parentId?:string;[key: string]: unknown;})=> {return request({url: "/IWS/sys-dict",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/sys-dict/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;name:string;parentId?:string;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/sys-dict",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/sys-dict/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetTrees = (data:{ParentId?:string;})=> {return request({url: "/IWS/sys-dict/trees",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetSelect = (data:{ParentId?:string;})=> {return request({url: "/IWS/sys-dict/select",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,GetTrees,GetSelect};
export default apis;