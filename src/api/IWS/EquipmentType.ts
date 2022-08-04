import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{name:string;parentId?:string;remark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/equipment-type",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/equipment-type/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{name:string;parentId?:string;remark?:string;[key: string]: unknown;}})=> {return request({url: "/IWS/equipment-type/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/equipment-type/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetTrees = (data:{ParentId?:string;})=> {return request({url: "/IWS/equipment-type/trees",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetTreesSelect = (data:{ParentId?:string;})=> {return request({url: "/IWS/equipment-type/trees-select",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,GetTrees,GetTreesSelect};
export default apis;