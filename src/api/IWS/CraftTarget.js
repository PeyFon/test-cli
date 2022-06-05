import request from "@/requests/interface";

const GetTree = ismock=>data=> {return request({url: "/IWS/craft-target/tree",method: "get",baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/craft-target/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/craft-target",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/craft-target",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/craft-target/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const GetCraftTargetList = ismock=>data=> {return request({url: "/IWS/craft-target/"+data+"/craft-target-list",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetTree,Get,Create,Update,Delete,GetCraftTargetList};
export default {...(request.exec(apis)),...(request.mock(apis))};