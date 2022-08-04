import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = (data:{id?:string;})=> {return request({url: "/IWS/file-manage",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{file:string;[key: string]: unknown;})=> {return request({url: "/IWS/file-manage",method:"post",ownMethod: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const Download = (data:{id:string;})=> {return request({url: "/IWS/file-manage/download/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Preview = (data:{id:string;})=> {return request({url: "/IWS/file-manage/preview/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Get,Create,Download,Preview};
export default apis;