import request from "@/requests/interface";

const FindById = ismock=>data=> {return request({url: "/identity/users/lookup/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const FindByUserName = ismock=>data=> {return request({url: "/identity/users/lookup/by-username/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Search = ismock=>data=> {return request({url: "/identity/users/lookup/search",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetCount = ismock=>data=> {return request({url: "/identity/users/lookup/count",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {FindById,FindByUserName,Search,GetCount};
export default {...(request.exec(apis)),...(request.mock(apis))};