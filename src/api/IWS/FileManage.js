import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/IWS/file-manage",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/file-manage",method: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const Download = ismock=>data=> {return request({url: "/IWS/file-manage/download/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Preview = ismock=>data=> {return request({url: "/IWS/file-manage/preview/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {Get,Create,Download,Preview};
export default {...(request.exec(apis)),...(request.mock(apis))};