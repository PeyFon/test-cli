import {VoloAbpPermissionManagementUpdatePermissionDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = (data:{providerName?:string;providerKey?:string;})=> {return request({url: "/permission-management/permissions",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{_params:{providerName?:string;providerKey?:string;};_body:{permissions?:Array<VoloAbpPermissionManagementUpdatePermissionDto>;[key: string]: unknown;}})=> {return request({url: "/permission-management/permissions?providerName="+data._params.providerName+"&providerKey="+data._params.providerKey,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,Update};
export default apis;