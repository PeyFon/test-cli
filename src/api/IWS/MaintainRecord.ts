import {AwingIWSPMFileDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data:{taskId:string;measure:string;remark?:string;filesList?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/maintain-record",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = (data:{TaskId:string;EquipmentId:string;})=> {return request({url: "/IWS/maintain-record",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Get};
export default apis;