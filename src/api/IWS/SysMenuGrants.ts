import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetMenuGrantsTreeForUser = (data:{userId:string;})=> {return request({url: "/IWS/sys-menu-grants/menu-grants-tree-for-user/"+data.userId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetMenuGrantsTreeForRole = (data:{roleId:string;})=> {return request({url: "/IWS/sys-menu-grants/menu-grants-tree-for-role/"+data.roleId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateMenuGrants = (data:{_params:{providerName?:string;providerKey?:string;};_body:{sysMenuIds:Array<string>;[key: string]: unknown;}})=> {return request({url: "/IWS/sys-menu-grants/menu-grants?providerName="+data._params.providerName+"&providerKey="+data._params.providerKey,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const GetMenuTree = ()=> {return request({url: "/IWS/sys-menu-grants/menu-tree",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetMenuGrantsTreeForUser,GetMenuGrantsTreeForRole,UpdateMenuGrants,GetMenuTree};
export default apis;