import request from "@/requests/interface";

const GetUserRoles = ismock=>data=> {return request({url: "/IWS/user-role/user-roles/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateUserRoles = ismock=>data=> {return request({url: "/IWS/user-role/user-roles/"+data.Id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetUserRoles,UpdateUserRoles};
export default {...(request.exec(apis)),...(request.mock(apis))};