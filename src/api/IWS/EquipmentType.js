import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/equipment-type",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/equipment-type/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/equipment-type/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/equipment-type/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetTrees = ismock=>data=> {return request({url: "/IWS/equipment-type/trees",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetTreesSelect = ismock=>data=> {return request({url: "/IWS/equipment-type/trees-select",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,GetTrees,GetTreesSelect};
export default {...(request.exec(apis)),...(request.mock(apis))};