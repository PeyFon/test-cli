import request from "@/requests/interface";

const GetMenuGrantsTreeForUser = ismock=>data=> {return request({url: "/IWS/sys-menu-grants/menu-grants-tree-for-user/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetMenuGrantsTreeForRole = ismock=>data=> {return request({url: "/IWS/sys-menu-grants/menu-grants-tree-for-role/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateMenuGrants = ismock=>data=> {return request({url: "/IWS/sys-menu-grants/menu-grants?providerName="+data.providerName+"&providerKey="+data.providerKey,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const GetMenuTree = ismock=>data=> {return request({url: "/IWS/sys-menu-grants/menu-tree",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetMenuGrantsTreeForUser,GetMenuGrantsTreeForRole,UpdateMenuGrants,GetMenuTree};
export default {...(request.exec(apis)),...(request.mock(apis))};