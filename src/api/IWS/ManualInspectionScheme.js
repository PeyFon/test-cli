import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetSchemeSelect = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme/scheme-select",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateActive = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme/"+data.id+"/active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetSimpleList = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme/simple-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/manual-inspection-scheme/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetSchemeSelect,UpdateActive,Create,GetSimpleList,Update,Delete,Get};
export default {...(request.exec(apis)),...(request.mock(apis))};