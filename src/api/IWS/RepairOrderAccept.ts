import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{OrderSource?:1|2|3|4;Code?:string;SubmitterName?:string;PhoneNumber?:string;SubmitTime_Start?:string;SubmitTime_End?:string;EquipmentCode?:string;EquipmentName?:string;OrderStatus?:1|2|3|4|5|6|7|8|9;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/repair-order-accept",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateAccept = (data:{orderId:string;acceptStatus:number;assignerId?:string;acceptRemark?:string;rejectRemark?:string;outsourcingRemark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-accept/accept",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateChargebackAudit = (data:{id:string;orderId:string;chargebackStatus:number;chargebackAssignerId?:string;chargebackAcceptRemark?:string;chargebackRejectRemark?:string;chargebackOutsourcingRemark?:string;[key: string]: unknown;})=> {return request({url: "/IWS/repair-order-accept/chargeback-audit",method:"put",ownMethod: "undefined",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateAccept,UpdateChargebackAudit};
export default apis;