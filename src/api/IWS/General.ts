import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetEnumSelectList = (data:{displayText?:string;})=> {return request({url: "/IWS/general/enum-select-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetUsersSelectList = (data:{userName?:string;})=> {return request({url: "/IWS/general/users-select-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetUserDeptSelectList = ()=> {return request({url: "/IWS/general/user-dept-select-list",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetEnumSelectList,GetUsersSelectList,GetUserDeptSelectList};
export default apis;