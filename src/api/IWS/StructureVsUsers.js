import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/structure-vs-users",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/structure-vs-users/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/structure-vs-users",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/structure-vs-users/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get};
export default {...(request.exec(apis)),...(request.mock(apis))};