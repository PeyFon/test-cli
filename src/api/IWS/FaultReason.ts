import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{FaultId?:string;Description?:string;Remark?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/fault-reason",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/fault-reason/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{faultId:string;description:string;remark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/fault-reason",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;description:string;remark?:string;concurrencyStamp?:string;[key: string]: unknown;})=> {return request({url: "/IWS/fault-reason",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const DeleteCheck = (data:{id:string;})=> {return request({url: "/IWS/fault-reason/"+data.id+"/check",method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/fault-reason/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,DeleteCheck,Delete};
export default apis;