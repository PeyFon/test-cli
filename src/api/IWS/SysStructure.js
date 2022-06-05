import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/sys-structure",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/sys-structure/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/sys-structure",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/sys-structure/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const MoveTo = ismock=>data=> {return request({url: "/IWS/sys-structure/move-to",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetTrees = ismock=>data=> {return request({url: "/IWS/sys-structure/trees",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetStructureUserList = ismock=>data=> {return request({url: "/IWS/sys-structure/structure-user-list/"+data.StructureId,method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetUserTrees = ismock=>data=> {return request({url: "/IWS/sys-structure/user-trees",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetUserStructureList = ismock=>data=> {return request({url: "/IWS/sys-structure/user-structure-list/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetStructureList = ismock=>data=> {return request({url: "/IWS/sys-structure/structure-list/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetUserStructureIdList = ismock=>data=> {return request({url: "/IWS/sys-structure/user-structure-id-list",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetStructureIdList = ismock=>data=> {return request({url: "/IWS/sys-structure/structure-id-list",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,MoveTo,GetTrees,GetStructureUserList,GetUserTrees,GetUserStructureList,GetStructureList,GetUserStructureIdList,GetStructureIdList};
export default {...(request.exec(apis)),...(request.mock(apis))};