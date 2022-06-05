import request from "@/requests/interface";

const GetList = ismock=>data=> {return request({url: "/IWS/drug-supplier",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/drug-supplier/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const Create = ismock=>data=> {return request({url: "/IWS/drug-supplier",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = ismock=>data=> {return request({url: "/IWS/drug-supplier",method: "put",data: data,baseURL:ismock ?"/mock": undefined})};
const Delete = ismock=>data=> {return request({url: "/IWS/drug-supplier/"+data,method: "delete",baseURL:ismock ?"/mock": undefined})};
const Export = ismock=>data=> {return request({url: "/IWS/drug-supplier/export",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const GetSelect = ismock=>data=> {return request({url: "/IWS/drug-supplier/select",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateActive = ismock=>data=> {return request({url: "/IWS/drug-supplier/"+data.id+"/active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetBrandListBySupplier = ismock=>data=> {return request({url: "/IWS/drug-supplier/"+data+"/brand-list-by-supplier",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetList,Get,Create,Update,Delete,Export,GetSelect,UpdateActive,GetBrandListBySupplier};
export default {...(request.exec(apis)),...(request.mock(apis))};