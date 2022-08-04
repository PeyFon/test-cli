import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{TaskCode?:string;TaskName?:string;Position?:string;RespName?:string;StartDate?:string;EndDate?:string;TaskStatus?:0|1|2|3;TaskResult?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/video-inspection-task",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/video-inspection-task/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const SetTaskArchived = (data:{id:string;})=> {return request({url: "/IWS/video-inspection-task/"+data.id+"/set-task-archived",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetItemResult = (data:{itemId:string;})=> {return request({url: "/IWS/video-inspection-task/item-result/"+data.itemId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetWaittingItems = (data:{id:string;itemId:string;})=> {return request({url: "/IWS/video-inspection-task/"+data.id+"/waitting-items/"+data.itemId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Report = (data:{id:string;itemId:string;_body:{taskResult?:boolean;remark?:string;[key: string]: unknown;}})=> {return request({url: "/IWS/video-inspection-task/"+data.id+"/report/"+data.itemId,method:"post",ownMethod: "body",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,SetTaskArchived,GetItemResult,GetWaittingItems,Report};
export default apis;