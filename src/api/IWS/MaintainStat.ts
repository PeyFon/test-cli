import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetBaseData = ()=> {return request({url: "/IWS/maintain-stat/base-data",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetMaintainStatusAnalyze = (data:{StartTime?:string;EndTime?:string;})=> {return request({url: "/IWS/maintain-stat/maintain-status-analyze",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetMaintainCategoryStat = (data:{StartTime?:string;EndTime?:string;})=> {return request({url: "/IWS/maintain-stat/maintain-category-stat",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetMaintainCompletionRateAnalyze = (data:{StartTime?:string;EndTime?:string;})=> {return request({url: "/IWS/maintain-stat/maintain-completion-rate-analyze",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetBaseData,GetMaintainStatusAnalyze,GetMaintainCategoryStat,GetMaintainCompletionRateAnalyze};
export default apis;