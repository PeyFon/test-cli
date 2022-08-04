import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetListBySceneId = (data:{sceneId?:string;})=> {return request({url: "/app/scene/file/GetListBySceneId",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateDataUnityweb = (data:{FileContainerName:string;FileName:string;SenceId:string;GenerateUniqueFileName:boolean;File:string;[key: string]: unknown;})=> {return request({url: "/app/scene/file/Data_Unityweb",method:"post",ownMethod: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateWasmUnityweb = (data:{FileContainerName:string;FileName:string;SenceId:string;GenerateUniqueFileName:boolean;File:string;[key: string]: unknown;})=> {return request({url: "/app/scene/file/Wasm_Unityweb",method:"post",ownMethod: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateFrameworkJsUnityweb = (data:{FileContainerName:string;FileName:string;SenceId:string;GenerateUniqueFileName:boolean;File:string;[key: string]: unknown;})=> {return request({url: "/app/scene/file/Framework_Js_Unityweb",method:"post",ownMethod: "formfile",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateDataUnityweb = (data:{id:string;_body:{FileContainerName:string;FileName:string;SenceId:string;GenerateUniqueFileName:boolean;File:string;[key: string]: unknown;}})=> {return request({url: "/app/scene/file/Data_Unityweb/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const UpdateWasmUnityweb = (data:{id:string;_body:{FileContainerName:string;FileName:string;SenceId:string;GenerateUniqueFileName:boolean;File:string;[key: string]: unknown;}})=> {return request({url: "/app/scene/file/Wasm_Unityweb/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const UpdateFrameworkJsUnityweb = (data:{id:string;_body:{FileContainerName:string;FileName:string;SenceId:string;GenerateUniqueFileName:boolean;File:string;[key: string]: unknown;}})=> {return request({url: "/app/scene/file/Framework_Js_Unityweb/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {GetListBySceneId,CreateDataUnityweb,CreateWasmUnityweb,CreateFrameworkJsUnityweb,UpdateDataUnityweb,UpdateWasmUnityweb,UpdateFrameworkJsUnityweb};
export default apis;