import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/sys-menu",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/sys-menu/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/sys-menu",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/sys-menu/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const MoveTo = ismock=>data=> {return request({url: "/IWS/sys-menu/move-to",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const MoveUp = ismock=>data=> {return request({url: "/IWS/sys-menu/"+data+"/move-up",method: "post",baseURL:ismock ?"/mock": undefined})};
const MoveDown = ismock=>data=> {return request({url: "/IWS/sys-menu/"+data+"/move-down",method: "post",baseURL:ismock ?"/mock": undefined})};
const GetTrees = ismock=>data=> {return request({url: "/IWS/sys-menu/trees",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateIsShowInDoc = ismock=>data=> {return request({url: "/IWS/sys-menu/is-show-in-doc",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,MoveTo,MoveUp,MoveDown,GetTrees,UpdateIsShowInDoc};
export default {...(request.exec(apis)),...(request.mock(apis))};