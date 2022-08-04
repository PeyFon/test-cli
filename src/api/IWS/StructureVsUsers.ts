import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{userId:string;structureId:string;[key: string]: unknown;})=> {return request({url: "/IWS/structure-vs-users",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/structure-vs-users/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;userId:string;structureId:string;[key: string]: unknown;})=> {return request({url: "/IWS/structure-vs-users",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/structure-vs-users/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get};
export default apis;