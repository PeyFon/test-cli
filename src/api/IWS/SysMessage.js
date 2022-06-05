import request from "@/requests/interface";

const GetListPrivateMessage = ismock=>data=> {return request({url: "/IWS/sys-message/private-message",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetListUnreadPrivateMessage = ismock=>data=> {return request({url: "/IWS/sys-message/unread-private-message",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetListSysMessage = ismock=>data=> {return request({url: "/IWS/sys-message/sys-message",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetListUnreadSysMessage = ismock=>data=> {return request({url: "/IWS/sys-message/unread-sys-message",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/sys-message/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetListSent = ismock=>data=> {return request({url: "/IWS/sys-message/sent",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const SetRead = ismock=>data=> {return request({url: "/IWS/sys-message/set-read",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const CreatePrivateMessage = ismock=>data=> {return request({url: "/IWS/sys-message/private-message",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const SetReadByBusinessId = ismock=>data=> {return request({url: "/IWS/sys-message/"+data+"/set-read-by-business-id",method: "post",baseURL:ismock ?"/mock": undefined})};

const apis = {GetListPrivateMessage,GetListUnreadPrivateMessage,GetListSysMessage,GetListUnreadSysMessage,Get,GetListSent,SetRead,CreatePrivateMessage,SetReadByBusinessId};
export default {...(request.exec(apis)),...(request.mock(apis))};