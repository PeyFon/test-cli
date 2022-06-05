import request from "@/requests/interface";

const Get = ismock=>data=> {return request({url: "/fileManagement/file/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetStatic = ismock=>data=> {return request({url: "/fileManagement/file/Static/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetList = ismock=>data=> {return request({url: "/fileManagement/file",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetNoPagedList = ismock=>data=> {return request({url: "/fileManagement/file/GetNoPagedList",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/fileManagement/file",method: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateMany = ismock=>data=> {return request({url: "/fileManagement/file/many",method: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/fileManagement/file/"+data.id,method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/fileManagement/file/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Move = ismock=>data=> {return request({url: "/fileManagement/file/"+data.id+"/move",method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const GetDownloadInfo = ismock=>data=> {return request({url: "/fileManagement/file/"+data+"/downloadInfo",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateInfo = ismock=>data=> {return request({url: "/fileManagement/file/"+data.id+"/info",method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const Download = ismock=>data=> {return request({url: "/fileManagement/file/"+data.id+"/download",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetConfiguration = ismock=>data=> {return request({url: "/fileManagement/file/configuration",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetStatic,GetList,GetNoPagedList,Create,CreateMany,Update,Delete,Move,GetDownloadInfo,UpdateInfo,Download,GetConfiguration};
export default {...(request.exec(apis)),...(request.mock(apis))};