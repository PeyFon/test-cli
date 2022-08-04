import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetUsersList = (data:{UserName?:string;Name?:string;PhoneNumber?:string;Gender?:boolean;IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/user-manage/users-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const SetUserIsActive = (data:{id:string;_params:{IsActive?:boolean;};})=> {return request({url: "/IWS/user-manage/"+data.id+"/set-user-is-active",method:"post",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};

const apis = {GetUsersList,SetUserIsActive};
export default apis;