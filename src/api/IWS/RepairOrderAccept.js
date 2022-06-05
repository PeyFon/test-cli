import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/repair-order-accept",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateAccept = ismock=>data=> {return request({url: "/IWS/repair-order-accept/accept",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateChargebackAudit = ismock=>data=> {return request({url: "/IWS/repair-order-accept/chargeback-audit",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const GetChargeback = ismock=>data=> {return request({url: "/IWS/repair-order-accept/chargeback/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateAccept,UpdateChargebackAudit,GetChargeback};
export default {...(request.exec(apis)),...(request.mock(apis))};