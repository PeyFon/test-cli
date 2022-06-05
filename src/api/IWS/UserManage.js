import request from "@/requests/interface";

const DeleteUser = ismock=>data=> {return request({url: "/IWS/user-manage/"+data+"/user",method: "delete",baseURL:ismock ?"/mock": undefined})};
const GetUsersList = ismock=>data=> {return request({url: "/IWS/user-manage/users-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const SetUserIsActive = ismock=>data=> {return request({url: "/IWS/user-manage/"+data.id+"/set-user-is-active",method: "post",params: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {DeleteUser,GetUsersList,SetUserIsActive};
export default {...(request.exec(apis)),...(request.mock(apis))};