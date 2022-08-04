import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetInformMessageList = (data:{Title?:string;Content?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/sys-message/inform-message-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetUnreadInformMessageList = (data:{Title?:string;Content?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/sys-message/unread-inform-message-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetTodoMessageList = (data:{Title?:string;Content?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/sys-message/todo-message-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetDoneMessageList = (data:{Title?:string;Content?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/sys-message/done-message-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/sys-message/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const SetRead = (data:Array<string>)=> {return request({url: "/IWS/sys-message/set-read",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const SetReadByFromId = (data:{id:string;})=> {return request({url: "/IWS/sys-message/"+data.id+"/set-read-by-from-id",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const SetDone = (data:Array<string>)=> {return request({url: "/IWS/sys-message/set-done",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const SetAllRead = (data:{messageType?:0|1;})=> {return request({url: "/IWS/sys-message/set-all-read",method:"post",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetInformMessageList,GetUnreadInformMessageList,GetTodoMessageList,GetDoneMessageList,Get,SetRead,SetReadByFromId,SetDone,SetAllRead};
export default apis;