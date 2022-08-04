import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{manufacturerId:string;brandName:string;[key: string]: unknown;})=> {return request({url: "/IWS/equipment-brand",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{id:string;})=> {return request({url: "/IWS/equipment-brand/"+data.id,method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Update = (data:{id:string;_body:{manufacturerId:string;brandName:string;[key: string]: unknown;}})=> {return request({url: "/IWS/equipment-brand/"+data.id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{id:string;})=> {return request({url: "/IWS/equipment-brand/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetTrees = ()=> {return request({url: "/IWS/equipment-brand/trees",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSelect = (data:{manufacturerId:string;})=> {return request({url: "/IWS/equipment-brand/select/"+data.manufacturerId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSelectByEquipmentTypeId = (data:{typeId:string;})=> {return request({url: "/IWS/equipment-brand/select-by-equipment-type-id/"+data.typeId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Delete,Update,Get,GetTrees,GetSelect,GetSelectByEquipmentTypeId};
export default apis;