import {AwingIoTConfigDeviceDtosDriverPropertieCreateDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{gatewayAddress:string;driverInfoId:number;name?:string;timeoutSecond:number;driverProperties?:Array<AwingIoTConfigDeviceDtosDriverPropertieCreateDto>;[key: string]: unknown;})=> {return request({url: "/IoT/device-app-config",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetDeviceData = (data:{Id?:number;GatewayAddress?:string;})=> {return request({url: "/IoT/device-app-config/device-data",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetDeviceList = (data:{GatewayAddress?:string;})=> {return request({url: "/IoT/device-app-config/device-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetDeviceWorking = (data:{Id?:number;GatewayAddress?:string;})=> {return request({url: "/IoT/device-app-config/device-working",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const SyncDeviceWorking = (data:{gatewayAddress:string;deviceId:number;[key: string]: unknown;})=> {return request({url: "/IoT/device-app-config/sync-device-working",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetDriverList = (data:{GatewayAddress?:string;})=> {return request({url: "/IoT/device-app-config/driver-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetDriverPropertieList = (data:{Id?:number;GatewayAddress?:string;})=> {return request({url: "/IoT/device-app-config/driver-propertie-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetTreeList = (data:{GatewayAddress?:string;})=> {return request({url: "/IoT/device-app-config/tree-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{_params:{Id?:number;};_body:{gatewayAddress:string;driverInfoId:number;name?:string;timeoutSecond:number;driverProperties?:Array<AwingIoTConfigDeviceDtosDriverPropertieCreateDto>;[key: string]: unknown;}})=> {return request({url: "/IoT/device-app-config?Id="+data._params.Id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,GetDeviceData,GetDeviceList,GetDeviceWorking,SyncDeviceWorking,GetDriverList,GetDriverPropertieList,GetTreeList,Update};
export default apis;