import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const SetXsrfCookie = ()=> {return request({url: "/AntiForgery/SetXsrfCookie",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {SetXsrfCookie};
export default apis;