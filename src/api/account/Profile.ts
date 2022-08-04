import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = ()=> {return request({url: "/account/my-profile",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{extraProperties?:object;userName?:string;email?:string;name?:string;surname?:string;phoneNumber?:string;concurrencyStamp?:string;[key: string]: unknown;})=> {return request({url: "/account/my-profile",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const ChangePassword = (data:{currentPassword?:string;newPassword:string;[key: string]: unknown;})=> {return request({url: "/account/my-profile/change-password",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,Update,ChangePassword};
export default apis;