import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetUserRoles = (data:{Id:string;})=> {return request({url: "/IWS/user-role/user-roles/"+data.Id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateUserRoles = (data:{Id:string;_body:{roleNames:Array<string>;[key: string]: unknown;}})=> {return request({url: "/IWS/user-role/user-roles/"+data.Id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {GetUserRoles,UpdateUserRoles};
export default apis;