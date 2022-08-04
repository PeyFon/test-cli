import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetList = (data:{Sorting?:string;StartTime?:string;EndTime?:string;HttpMethod?:string;Url?:string;UserName?:string;ApplicationName?:string;MaxExecutionDuration?:number;MinExecutionDuration?:number;HasException?:boolean;HttpStatusCode?:100|101|102|103|200|201|202|203|204|205|206|207|208|226|300|301|302|303|304|305|306|307|308|400|401|402|403|404|405|406|407|408|409|410|411|412|413|414|415|416|417|421|422|423|424|426|428|429|431|451|500|501|502|503|504|505|506|507|508|510|511;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/audit-log",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetCount = (data:{StartTime?:string;EndTime?:string;HttpMethod?:string;Url?:string;UserName?:string;ApplicationName?:string;MaxExecutionDuration?:number;MinExecutionDuration?:number;HasException?:boolean;HttpStatusCode?:100|101|102|103|200|201|202|203|204|205|206|207|208|226|300|301|302|303|304|305|306|307|308|400|401|402|403|404|405|406|407|408|409|410|411|412|413|414|415|416|417|421|422|423|424|426|428|429|431|451|500|501|502|503|504|505|506|507|508|510|511;})=> {return request({url: "/IWS/audit-log/count",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetAverageExecutionDurationPerDay = (data:{startDate?:string;endDate?:string;})=> {return request({url: "/IWS/audit-log/average-execution-duration-per-day",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,GetCount,GetAverageExecutionDurationPerDay};
export default apis;