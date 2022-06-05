import request from "@/requests/interface";

const GetMyConfiguration = ismock=>data=> {return request({url: "/account/my-configuration",method: "get",baseURL:ismock ?"/mock": undefined})};
const RequestIds4Login = ismock=>data=> {return request({url: "/account/token",method: "body",data: data,baseURL:ismock ?"/mock": undefined})}
const Register = ismock=>data=> {return request({url: "/account/register",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const SendPasswordResetCode = ismock=>data=> {return request({url: "/account/send-password-reset-code",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const ResetPassword = ismock=>data=> {return request({url: "/account/reset-password",method: "body",data: data,baseURL:ismock ?"/mock": undefined})}
const Login = ismock=>data=> {return request({url: "/account/login",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Logout = ismock=>data=> {return request({url: "/account/logout",method: "get",baseURL:ismock ?"/mock": undefined})};
const CheckPassword = ismock=>data=> {return request({url: "/account/check-password",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetMyConfiguration,RequestIds4Login,Register,SendPasswordResetCode,ResetPassword,Login,Logout,CheckPassword}
export default {...(request.exec(apis)),...(request.mock(apis))};