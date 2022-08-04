import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{Code?:string;EquipmentCode?:string;EquipmentName?:string;MaintainCategory?:1|2|3;MaintainRespId?:string;MaintainRespName?:string;TaskStartTime?:string;TaskEndTime?:string;Status?:0|1|2|3;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/maintain-task",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/maintain-task/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const CreateMaintainTask = ()=> {return request({url: "/IWS/maintain-task/maintain-task",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetEvaluationScore = (data:{id:string;})=> {return request({url: "/IWS/maintain-task/"+data.id+"/evaluation-score",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateMaintainTask = (data:{id:string;evaluationStars:number;evaluationContent:string;[key: string]: unknown;})=> {return request({url: "/IWS/maintain-task/maintain-task",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const SendTaskOverdueNotice = ()=> {return request({url: "/IWS/maintain-task/send-task-overdue-notice",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,CreateMaintainTask,GetEvaluationScore,UpdateMaintainTask,SendTaskOverdueNotice};
export default apis;