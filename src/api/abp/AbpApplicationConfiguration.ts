import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = ()=> {return request({url: "/abp/application-configuration",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Get};
export default apis;