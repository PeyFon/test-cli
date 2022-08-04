import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetTree = ()=> {return request({url: "/IWS/craft-target/tree",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/craft-target/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{name?:string;parentId?:string;targetMin:number;targetMax:number;[key: string]: unknown;})=> {return request({url: "/IWS/craft-target",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;name?:string;parentId?:string;targetMin:number;targetMax:number;concurrencyStamp:string;[key: string]: unknown;})=> {return request({url: "/IWS/craft-target",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/craft-target/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetCraftTargetList = (data:{Id?:string;})=> {return request({url: "/IWS/craft-target/craft-target-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetTree,Get,Create,Update,Delete,GetCraftTargetList};
export default apis;