import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/repair-order-assign",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateAssign = ismock=>data=> {return request({url: "/IWS/repair-order-assign/assign",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateApplyReply = ismock=>data=> {return request({url: "/IWS/repair-order-assign/apply-reply",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const GetApply = ismock=>data=> {return request({url: "/IWS/repair-order-assign/apply/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetAssignPrev = ismock=>data=> {return request({url: "/IWS/repair-order-assign/"+data+"/assign-prev",method: "get",baseURL:ismock ?"/mock": undefined})};
const CreateChargeback = ismock=>data=> {return request({url: "/IWS/repair-order-assign/chargeback",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateAssign,UpdateApplyReply,GetApply,GetAssignPrev,CreateChargeback};
export default {...(request.exec(apis)),...(request.mock(apis))};