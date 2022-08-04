import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetMyConfiguration = ()=> {return request({url: "/account/my-configuration",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const RequestIds4Login = (data:{username?:string;password?:string;[key: string]: unknown;})=> {return request({url: "/account/token",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Register = (data:{extraProperties?:object;userName:string;emailAddress:string;password:string;appName:string;[key: string]: unknown;})=> {return request({url: "/account/register",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const SendPasswordResetCode = (data:{email:string;appName:string;returnUrl?:string;returnUrlHash?:string;[key: string]: unknown;})=> {return request({url: "/account/send-password-reset-code",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const ResetPassword = (data:{userId:string;resetToken:string;password:string;[key: string]: unknown;})=> {return request({url: "/account/reset-password",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Login = (data:{userNameOrEmailAddress:string;password:string;rememberMe:boolean;[key: string]: unknown;})=> {return request({url: "/account/login",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Logout = ()=> {return request({url: "/account/logout",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const CheckPassword = (data:{userNameOrEmailAddress:string;password:string;rememberMe:boolean;[key: string]: unknown;})=> {return request({url: "/account/check-password",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetMyConfiguration,RequestIds4Login,Register,SendPasswordResetCode,ResetPassword,Login,Logout,CheckPassword};
export default apis;