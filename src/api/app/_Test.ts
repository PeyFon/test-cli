import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const SendTestSysMessage = (data:{toUserId?:string;})=> {return request({url: "/IWS/_Test/SendTestSysMessage",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {SendTestSysMessage};
export default apis;