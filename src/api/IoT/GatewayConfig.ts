import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{name:string;mqttIP:string;mqttPort:number;mqttUser:string;mqttPwd:string;timeoutsecond?:number;gatewayAddress:string;[key: string]: unknown;})=> {return request({url: "/IoT/gateway-config",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{Id?:string;})=> {return request({url: "/IoT/gateway-config",method:"delete",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetGateway = (data:{Id:string;})=> {return request({url: "/IoT/gateway-config/gateway/"+data.Id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = ()=> {return request({url: "/IoT/gateway-config",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetPageList = (data:{Name?:string;MqttIP?:string;GatewayAddress?:string;GateWayFlag?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IoT/gateway-config/page-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetTreeList = ()=> {return request({url: "/IoT/gateway-config/tree-list",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{_params:{Id?:string;};_body:{name:string;mqttIP:string;mqttPort:number;mqttUser:string;mqttPwd?:string;timeoutsecond?:number;gatewayAddress:string;concurrencyStamp?:string;[key: string]: unknown;}})=> {return request({url: "/IoT/gateway-config?Id="+data._params.Id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,GetGateway,GetList,GetPageList,GetTreeList,Update};
export default apis;