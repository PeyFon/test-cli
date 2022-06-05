import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/equipment-brand-model",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Export = ismock=>data=> {return request({url: "/IWS/equipment-brand-model/export",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/equipment-brand-model",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/equipment-brand-model/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/equipment-brand-model/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/equipment-brand-model/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetSelect = ismock=>data=> {return request({url: "/IWS/equipment-brand-model/select/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateActive = ismock=>data=> {return request({url: "/IWS/equipment-brand-model/"+data.id+"/active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetDealerModelStat = ismock=>data=> {return request({url: "/IWS/equipment-brand-model/"+data.id+"/dealer-model-stat",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Export,Create,Delete,Update,Get,GetSelect,UpdateActive,GetDealerModelStat};
export default {...(request.exec(apis)),...(request.mock(apis))};