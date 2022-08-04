import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetOverviewList = (data:{ProductName?:string;SupplierName?:string;BatchNumberName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-stock/overview-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetListByBatchNum = (data:{ProductName?:string;SupplierName?:string;BatchNumberName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-stock/by-batch-num",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const ExportOverview = (data:{ProductName?:string;SupplierName?:string;BatchNumberName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-stock/export-overview",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const ExportBatchNum = (data:{ProductName?:string;SupplierName?:string;BatchNumberName?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-stock/export-batch-num",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetProductAndBatchNumList = (data:{ProductName?:string;SupplierName?:string;BatchNumberName?:string;TypeName?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/product-stock/product-and-batch-num-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetOverviewList,GetListByBatchNum,ExportOverview,ExportBatchNum,GetProductAndBatchNumList};
export default apis;