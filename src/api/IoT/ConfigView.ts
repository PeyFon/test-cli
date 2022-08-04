import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{_params:{sceneId:string;};_body:{name:string;customScriptionName?:string;customScriptionText?:string;description?:string;[key: string]: unknown;}})=> {return request({url: "/IoT/config-view?sceneId="+data._params.sceneId,method:"post",ownMethod: "body",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{Id:string;})=> {return request({url: "/IoT/config-view",method:"delete",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const DeleteBySceneId = (data:{sceneId:string;})=> {return request({url: "/IoT/config-view/by-scene-id/"+data.sceneId,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetDetail = (data:{Id:string;})=> {return request({url: "/IoT/config-view/detail/"+data.Id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{sceneId:string;Name?:string;CustomScriptionName?:string;CustomScriptionText?:string;Description?:string;})=> {return request({url: "/IoT/config-view",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetPageList = (data:{sceneId:string;_params:{Name?:string;CustomScriptionName?:string;CustomScriptionText?:string;Description?:string;SkipCount?:number;MaxResultCount?:number;};})=> {return request({url: "/IoT/config-view/page-list/"+data.sceneId,method:"get",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{_params:{Id:string;};_body:{sceneId:string;name:string;customScriptionName?:string;customScriptionText?:string;description?:string;concurrencyStamp:string;[key: string]: unknown;}})=> {return request({url: "/IoT/config-view?Id="+data._params.Id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,DeleteBySceneId,GetDetail,GetList,GetPageList,Update};
export default apis;