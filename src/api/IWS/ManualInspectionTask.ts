import {AwingIWSPMFileDto,AwingIWSInspectionContentCheckedItemDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{TaskCode?:string;TaskName?:string;Position?:string;RespName?:string;StartDate?:string;EndDate?:string;TaskStatus?:0|1|2|3;TaskResult?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/manual-inspection-task",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Appraise = (data:{id:string;_body:{appraiseScore:number;appraiseContent:string;[key: string]: unknown;}})=> {return request({url: "/IWS/manual-inspection-task/"+data.id+"/appraise",method:"post",ownMethod: "body",data: data._body,baseURL:ismock ?"/mock": undefined})};
const GetAppraiseScore = (data:{id:string;})=> {return request({url: "/IWS/manual-inspection-task/"+data.id+"/appraise-score",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/manual-inspection-task/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const SetTaskArchived = (data:{id:string;})=> {return request({url: "/IWS/manual-inspection-task/"+data.id+"/set-task-archived",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetItemResult = (data:{itemId:string;})=> {return request({url: "/IWS/manual-inspection-task/item-result/"+data.itemId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetWaittingItems = (data:{itemId:string;})=> {return request({url: "/IWS/manual-inspection-task/waitting-items/"+data.itemId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Report = (data:{itemId:string;_body:{inspectorId:string;reportTime:string;remark?:string;filesList?:Array<AwingIWSPMFileDto>;items?:Array<AwingIWSInspectionContentCheckedItemDto>;[key: string]: unknown;}})=> {return request({url: "/IWS/manual-inspection-task/report/"+data.itemId,method:"post",ownMethod: "body",data: data._body,baseURL:ismock ?"/mock": undefined})};
const UrgentReport = (data:{id:string;_body:{urgentReportContent?:string;[key: string]: unknown;}})=> {return request({url: "/IWS/manual-inspection-task/"+data.id+"/urgent-report",method:"post",ownMethod: "body",data: data._body,baseURL:ismock ?"/mock": undefined})};
const SendTaskOverdueNotice = ()=> {return request({url: "/IWS/manual-inspection-task/send-task-overdue-notice",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Appraise,GetAppraiseScore,Get,SetTaskArchived,GetItemResult,GetWaittingItems,Report,UrgentReport,SendTaskOverdueNotice};
export default apis;