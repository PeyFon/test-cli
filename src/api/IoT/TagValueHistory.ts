import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetPageList = (data:{TagId?:number;StartTime?:string;EndTime?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IoT/tag-value-history/page-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetList = (data:{TagId?:number;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IoT/tag-value-history",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetPageList,GetList};
export default apis;