import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/sys-power",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/sys-power/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const CreateRelation = ismock=>data=> {return request({url: "/IWS/sys-power/relation",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetTreesPower = ismock=>data=> {return request({url: "/IWS/sys-power/trees-power",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetTreesForRole = ismock=>data=> {return request({url: "/IWS/sys-power/trees-for-role/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetUserCheckedPower = ismock=>data=> {return request({url: "/IWS/sys-power/user-checked-power",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,CreateRelation,GetTreesPower,GetTreesForRole,GetUserCheckedPower};
export default {...(request.exec(apis)),...(request.mock(apis))};