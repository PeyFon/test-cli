import request from "@/requests/interface";

const GetEnumSelectList = ismock=>data=> {return request({url: "/IWS/general/enum-select-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetUsersSelectList = ismock=>data=> {return request({url: "/IWS/general/users-select-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetEnumSelectList,GetUsersSelectList};
export default {...(request.exec(apis)),...(request.mock(apis))};