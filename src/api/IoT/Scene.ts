import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{name?:string;description?:string;[key: string]: unknown;})=> {return request({url: "/IoT/scene",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IoT/scene/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetDetail = (data:{id:string;})=> {return request({url: "/IoT/scene/"+data.id+"/detail",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{Name?:string;Description?:string;})=> {return request({url: "/IoT/scene",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{name?:string;description?:string;concurrencyStamp:string;[key: string]: unknown;}})=> {return request({url: "/IoT/scene/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,GetDetail,GetList,Update};
export default apis;