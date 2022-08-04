import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetSummaryStat = ()=> {return request({url: "/IWS/video-inspection-stat/summary-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetCompletedRateStat = ()=> {return request({url: "/IWS/video-inspection-stat/completed-rate-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetFaultComparedStat = ()=> {return request({url: "/IWS/video-inspection-stat/fault-compared-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetSummaryStat,GetCompletedRateStat,GetFaultComparedStat};
export default apis;