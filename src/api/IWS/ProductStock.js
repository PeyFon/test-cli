import request from "@/requests/interface";

const GetOverviewList = ismock=>data=> {return request({url: "/IWS/product-stock/overview-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetListByBatchNum = ismock=>data=> {return request({url: "/IWS/product-stock/by-batch-num",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetOverviewList,GetListByBatchNum};
export default {...(request.exec(apis)),...(request.mock(apis))};