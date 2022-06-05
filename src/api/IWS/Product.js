import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/product",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/product/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/product",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/product",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/product/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Export = ismock=>data=> {return request({url: "/IWS/product/export",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const DownloadTemplate = ismock=>data=> {return request({url: "/IWS/product/download-template",method: "get",baseURL:ismock ?"/mock": undefined})};
const Import = ismock=>data=> {return request({url: "/IWS/product/import/"+data,method: "post",baseURL:ismock ?"/mock": undefined})};
const ImportNoActive = ismock=>data=> {return request({url: "/IWS/product/import-no-active/"+data,method: "post",baseURL:ismock ?"/mock": undefined})};
const GetSelect = ismock=>data=> {return request({url: "/IWS/product/select",method: "get",baseURL:ismock ?"/mock": undefined})};
const UpdateActive = ismock=>data=> {return request({url: "/IWS/product/"+data.id+"/active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,DownloadTemplate,Import,ImportNoActive,GetSelect,UpdateActive};
export default {...(request.exec(apis)),...(request.mock(apis))};