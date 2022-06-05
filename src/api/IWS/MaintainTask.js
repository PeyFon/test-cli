import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/maintain-task",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/maintain-task/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/maintain-task",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetEvaluationScore = ismock=>data=> {return request({url: "/IWS/maintain-task/"+data+"/evaluation-score",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateMaintainTask = ismock=>data=> {return request({url: "/IWS/maintain-task/maintain-task",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,GetEvaluationScore,UpdateMaintainTask};
export default {...(request.exec(apis)),...(request.mock(apis))};