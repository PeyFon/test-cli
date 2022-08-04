import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetFaultList = (data:{EquipmentTypeId?:string;Code?:string;Description?:string;Level?:1|2|3;IsActive?:boolean;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/fault-relate-equipment-type/fault-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const BatchInsert = (data:{equipmentTypeId:string;faultIds?:Array<string>;[key: string]: unknown;})=> {return request({url: "/IWS/fault-relate-equipment-type/batch-insert",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const BatchRemove = (data:{ids?:Array<string>;[key: string]: unknown;})=> {return request({url: "/IWS/fault-relate-equipment-type/batch-remove",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetFaultSelectList = (data:{equipmentTypeId:string;})=> {return request({url: "/IWS/fault-relate-equipment-type/fault-select-list/"+data.equipmentTypeId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetFaultList,BatchInsert,BatchRemove,GetFaultSelectList};
export default apis;