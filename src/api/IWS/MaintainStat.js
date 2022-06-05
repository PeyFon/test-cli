import request from "@/requests/interface";

const GetBaseData = ismock=>data=> {return request({url: "/IWS/maintain-stat/base-data",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetMaintainStatusAnalyze = ismock=>data=> {return request({url: "/IWS/maintain-stat/maintain-status-analyze",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetMaintainCategoryStat = ismock=>data=> {return request({url: "/IWS/maintain-stat/maintain-category-stat",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetMaintainCompletionRateAnalyze = ismock=>data=> {return request({url: "/IWS/maintain-stat/maintain-completion-rate-analyze",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetBaseData,GetMaintainStatusAnalyze,GetMaintainCategoryStat,GetMaintainCompletionRateAnalyze};
export default {...(request.exec(apis)),...(request.mock(apis))};