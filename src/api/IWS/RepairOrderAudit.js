import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/repair-order-audit",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateAudit = ismock=>data=> {return request({url: "/IWS/repair-order-audit/audit",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateAudit};
export default {...(request.exec(apis)),...(request.mock(apis))};