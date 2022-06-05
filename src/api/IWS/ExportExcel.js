import request from "@/requests/interface";

const CreateExcel = ismock=>data=> {return request({url: "/IWS/export-excel/excel",method: "post",baseURL:ismock ?"/mock": undefined})};
const ExportExcel = ismock=>data=> {return request({url: "/IWS/export-excel/export-excel",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateExcelFileFromTemplate = ismock=>data=> {return request({url: "/IWS/export-excel/excel-file-from-template",method: "post",params: data,baseURL:ismock ?"/mock": undefined})};
const Download = ismock=>data=> {return request({url: "/IWS/export-excel/download",method: "post",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateWordFileFromTemplate = ismock=>data=> {return request({url: "/IWS/export-excel/word-file-from-template",method: "post",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {CreateExcel,ExportExcel,CreateExcelFileFromTemplate,Download,CreateWordFileFromTemplate};
export default {...(request.exec(apis)),...(request.mock(apis))};