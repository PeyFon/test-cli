import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetStatic = (data:{id:string;})=> {return request({url: "/app/configview/file/Static/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetListByConfigId = (data:{configViewId?:string;})=> {return request({url: "/app/configview/file/GetListByConfigId",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetListByConfigName = (data:{configName?:string;})=> {return request({url: "/app/configview/file/GetListByConfigName",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetStatic,GetListByConfigId,GetListByConfigName};
export default apis;