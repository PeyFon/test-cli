import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{menuId:string;name:string;fullName:string;permissionNameList?:Array<string>;[key: string]: unknown;})=> {return request({url: "/IWS/sys-power",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/sys-power/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const CreateRelation = (data:{roleId:string;powerIdList?:Array<string>;[key: string]: unknown;})=> {return request({url: "/IWS/sys-power/relation",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetTreesPower = ()=> {return request({url: "/IWS/sys-power/trees-power",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetTreesForRole = (data:{roleId:string;})=> {return request({url: "/IWS/sys-power/trees-for-role/"+data.roleId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetUserCheckedPower = ()=> {return request({url: "/IWS/sys-power/user-checked-power",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,CreateRelation,GetTreesPower,GetTreesForRole,GetUserCheckedPower};
export default apis;