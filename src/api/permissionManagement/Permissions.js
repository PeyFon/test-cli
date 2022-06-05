import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/permission-management/permissions",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/permission-management/permissions?providerName="+data.providerName+"&providerKey="+data.providerKey,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,Update};
export default {...(request.exec(apis)),...(request.mock(apis))};