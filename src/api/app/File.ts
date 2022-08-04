import {AwingFileManagementFilesFileType} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Get = (data:{id:string;})=> {return request({url: "/fileManagement/file/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetStatic = (data:{id:string;})=> {return request({url: "/fileManagement/file/Static/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{ParentId?:string;FileContainerName:string;OwnerUserId?:string;DirectoryOnly?:boolean;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/fileManagement/file",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetNoPagedList = (data:{ParentId?:string;FileContainerName:string;OwnerUserId?:string;DirectoryOnly?:boolean;})=> {return request({url: "/fileManagement/file/GetNoPagedList",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Create = (data:{FileContainerName:string;FileType:AwingFileManagementFilesFileType;ParentId:string;OwnerUserId:string;File:string;GenerateUniqueFileName:boolean;[key: string]: unknown;})=> {return request({url: "/fileManagement/file",method:"post",ownMethod: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateMany = (data:{FileContainerName:string;FileType:AwingFileManagementFilesFileType;ParentId:string;OwnerUserId:string;File:Array<string>;GenerateUniqueFileName:boolean;[key: string]: unknown;})=> {return request({url: "/fileManagement/file/many",method:"post",ownMethod: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{FileName:string;File:string;[key: string]: unknown;}})=> {return request({url: "/fileManagement/file/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/fileManagement/file/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Move = (data:{id:string;_body:{newParentId?:string;newFileName:string;[key: string]: unknown;}})=> {return request({url: "/fileManagement/file/"+data.id+"/move",method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const GetDownloadInfo = (data:{id:string;})=> {return request({url: "/fileManagement/file/"+data.id+"/downloadInfo",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const UpdateInfo = (data:{id:string;_body:{fileName:string;[key: string]: unknown;}})=> {return request({url: "/fileManagement/file/"+data.id+"/info",method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Download = (data:{id:string;_params:{token?:string;};})=> {return request({url: "/fileManagement/file/"+data.id+"/download",method:"get",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const GetConfiguration = (data:{fileContainerName?:string;ownerUserId?:string;})=> {return request({url: "/fileManagement/file/configuration",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Get,GetStatic,GetList,GetNoPagedList,Create,CreateMany,Update,Delete,Move,GetDownloadInfo,UpdateInfo,Download,GetConfiguration};
export default apis;