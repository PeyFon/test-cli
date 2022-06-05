import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/video-inspection-task",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/video-inspection-task/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const SetTaskArchived = ismock=>data=> {return request({url: "/IWS/video-inspection-task/"+data+"/set-task-archived",method: "post",baseURL:ismock ?"/mock": undefined})};
const GetItemResult = ismock=>data=> {return request({url: "/IWS/video-inspection-task/item-result/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetWaittingItems = ismock=>data=> {return request({url: "/IWS/video-inspection-task/"+data.id+"/waitting-items/"+data.itemId,method: "get",baseURL:ismock ?"/mock": undefined})};
const Report = ismock=>data=> {return request({url: "/IWS/video-inspection-task/"+data.id+"/report/"+data.itemId,method: "body",data: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,SetTaskArchived,GetItemResult,GetWaittingItems,Report};
export default {...(request.exec(apis)),...(request.mock(apis))};