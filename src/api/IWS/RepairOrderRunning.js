import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/repair-order-running",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateRecord = ismock=>data=> {return request({url: "/IWS/repair-order-running/record",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateApply = ismock=>data=> {return request({url: "/IWS/repair-order-running/apply",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateRecord,CreateApply};
export default {...(request.exec(apis)),...(request.mock(apis))};