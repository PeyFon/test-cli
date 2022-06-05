import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetSchemeSelect = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme/scheme-select",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateActive = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme/"+data.id+"/active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetSimpleList = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme/simple-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const CheckNow = ismock=>data=> {return request({url: "/IWS/video-inspection-scheme/"+data+"/check-now",method: "post",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetSchemeSelect,UpdateActive,Create,GetSimpleList,Update,Delete,Get,CheckNow};
export default {...(request.exec(apis)),...(request.mock(apis))};