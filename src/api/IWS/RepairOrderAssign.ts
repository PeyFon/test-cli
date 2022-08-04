import {AwingIWSEquipmentOMFaultSource} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{OrderSource?:1|2|3|4;Code?:string;EquipmentCode?:string;EquipmentName?:string;AcceptTime_Start?:string;AcceptTime_End?:string;OrderStatus?:1|2|3|4|5|6|7|8|9;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order-assign",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateAssign = (data:{orderId:string;isReplaceEquipment:boolean;changeEquipmentId?:string;faultSource:AwingIWSEquipmentOMFaultSource;faultId?:string;faultDescription?:string;reasonSource:AwingIWSEquipmentOMFaultSource;reasonId?:string;reasonDescription?:string;solutionSource:AwingIWSEquipmentOMFaultSource;solutionId?:string;solutionDescription?:string;repairRespId:string;repairPlayerIdList?:Array<string>;assignRemark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-assign/assign",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateApplyReply = (data:{id:string;orderId:string;replyStatus:number;isReplaceEquipment?:boolean;changeEquipmentId?:string;repairRespId?:string;repairPlayerIdList?:Array<string>;replyRemark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-assign/apply-reply",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};
const GetApply = (data:{id:string;})=> {return request({url: "/IWS/repair-order-assign/"+data.id+"/apply",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const CreateChargeback = (data:{orderId:string;chargebackRemark:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-assign/chargeback",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateAssign,UpdateApplyReply,GetApply,CreateChargeback};
export default apis;