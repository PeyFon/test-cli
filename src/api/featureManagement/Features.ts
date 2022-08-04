import {VoloAbpFeatureManagementUpdateFeatureDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = (data:{providerName?:string;providerKey?:string;})=> {return request({url: "/feature-management/features",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{_params:{providerName?:string;providerKey?:string;};_body:{features?:Array<VoloAbpFeatureManagementUpdateFeatureDto>;[key: string]: unknown;}})=> {return request({url: "/feature-management/features?providerName="+data._params.providerName+"&providerKey="+data._params.providerKey,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,Update};
export default apis;