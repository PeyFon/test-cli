import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/repair-order-record",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateOutsource = ismock=>data=> {return request({url: "/IWS/repair-order-record/outsource",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const ExportExcel = ismock=>data=> {return request({url: "/IWS/repair-order-record/export-excel",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,CreateOutsource,ExportExcel};
export default {...(request.exec(apis)),...(request.mock(apis))};