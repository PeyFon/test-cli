import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const CreateGroup = (data:{gatewayAddress:string;deviceId:number;name:string;updateRate?:number;startAddress?:number;[key: string]: unknown;})=> {return request({url: "/IoT/group-config/group",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetGroupTree = (data:{GatewayAddress:string;DeviceId?:number;})=> {return request({url: "/IoT/group-config/group-tree",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetGroup = (data:{GatewayAddress:string;Id?:number;})=> {return request({url: "/IoT/group-config/group",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetRunTimeGroup = (data:{GatewayAddress:string;GroupId:number;})=> {return request({url: "/IoT/group-config/run-time-group",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const SwitchGroup = (data:{gatewayAddress?:string;groupId:number;isEnabled:boolean;[key: string]: unknown;})=> {return request({url: "/IoT/group-config/switch-group",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const SyncGroup = (data:{gatewayAddress:string;groupId:number;[key: string]: unknown;})=> {return request({url: "/IoT/group-config/sync-group",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateGroup = (data:{id:number;_body:{gatewayAddress?:string;deviceId:number;name:string;updateRate?:number;startAddress?:number;[key: string]: unknown;}})=> {return request({url: "/IoT/group-config/"+data.id+"/group",method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {CreateGroup,GetGroupTree,GetGroup,GetRunTimeGroup,SwitchGroup,SyncGroup,UpdateGroup};
export default apis;