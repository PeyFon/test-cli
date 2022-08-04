import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{reasonId?:string;})=> {return request({url: "/IWS/fault-reason-solution",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/fault-reason-solution/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{faultId:string;reasonId:string;description:string;profile?:string;usedGoods?:string;usedTools?:string;workflow?:string;cost:number;[key: string]: unknown;})=> {return request({url: "/IWS/fault-reason-solution",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;description:string;profile?:string;usedGoods?:string;usedTools?:string;workflow?:string;cost:number;concurrencyStamp?:string;[key: string]: unknown;})=> {return request({url: "/IWS/fault-reason-solution",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const DeleteCheck = (data:{id:string;})=> {return request({url: "/IWS/fault-reason-solution/"+data.id+"/check",method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/fault-reason-solution/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,DeleteCheck,Delete};
export default apis;