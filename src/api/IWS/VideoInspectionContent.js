import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/video-inspection-content",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetValidList = ismock=>data=> {return request({url: "/IWS/video-inspection-content/valid-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateActive = ismock=>data=> {return request({url: "/IWS/video-inspection-content/"+data.id+"/active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/video-inspection-content",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/video-inspection-content/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/video-inspection-content/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/video-inspection-content/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetValidList,UpdateActive,Create,Update,Delete,Get};
export default {...(request.exec(apis)),...(request.mock(apis))};