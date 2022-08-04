import {AwingIWSInspectionContentItemDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetInspectionItem = (data:{equipmentTypeId:string;})=> {return request({url: "/IWS/manual-inspection-content/inspection-item/"+data.equipmentTypeId,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const SetInspectionItem = (data:{equipmentTypeId:string;_body:{cost:number;items?:Array<AwingIWSInspectionContentItemDto>;[key: string]: unknown;}})=> {return request({url: "/IWS/manual-inspection-content/set-inspection-item/"+data.equipmentTypeId,method:"post",ownMethod: "body",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {GetInspectionItem,SetInspectionItem};
export default apis;