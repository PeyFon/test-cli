import request from "@/requests/interface";

const GetManufacturerList = ismock=>data=> {return request({url: "/IWS/supplier/manufacturer-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const ExportManufacturer = ismock=>data=> {return request({url: "/IWS/supplier/export-manufacturer",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateManufacturer = ismock=>data=> {return request({url: "/IWS/supplier/manufacturer",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateManufacturer = ismock=>data=> {return request({url: "/IWS/supplier/"+data.id+"/manufacturer",method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const DeleteManufacturer = ismock=>data=> {return request({url: "/IWS/supplier/"+data+"/manufacturer",method: "delete",baseURL:ismock ?"/mock": undefined})};
const UpdateManufacturerActive = ismock=>data=> {return request({url: "/IWS/supplier/"+data.id+"/manufacturer-active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetManufacturer = ismock=>data=> {return request({url: "/IWS/supplier/"+data+"/manufacturer",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetManufacturerEquipmentStat = ismock=>data=> {return request({url: "/IWS/supplier/"+data.id+"/manufacturer-equipment-stat",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetManufacturerSelect = ismock=>data=> {return request({url: "/IWS/supplier/manufacturer-select",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetManufacturerByBrandId = ismock=>data=> {return request({url: "/IWS/supplier/manufacturer-by-brand-id/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const GetDealerList = ismock=>data=> {return request({url: "/IWS/supplier/dealer-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};
const ExportDealer = ismock=>data=> {return request({url: "/IWS/supplier/export-dealer",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateDealer = ismock=>data=> {return request({url: "/IWS/supplier/dealer",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const UpdateDealer = ismock=>data=> {return request({url: "/IWS/supplier/"+data.id+"/dealer",method: "put",data: data.data,baseURL:ismock ?"/mock": undefined})};
const DeleteDealer = ismock=>data=> {return request({url: "/IWS/supplier/"+data+"/dealer",method: "delete",baseURL:ismock ?"/mock": undefined})};
const UpdateDealerActive = ismock=>data=> {return request({url: "/IWS/supplier/"+data.id+"/dealer-active",method: "put",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetDealer = ismock=>data=> {return request({url: "/IWS/supplier/"+data+"/dealer",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetDealerEquipmentStat = ismock=>data=> {return request({url: "/IWS/supplier/"+data.id+"/dealer-equipment-stat",method: "get",params: data.data,baseURL:ismock ?"/mock": undefined})};
const GetDealerSelect = ismock=>data=> {return request({url: "/IWS/supplier/dealer-select",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {GetManufacturerList,ExportManufacturer,CreateManufacturer,UpdateManufacturer,DeleteManufacturer,UpdateManufacturerActive,GetManufacturer,GetManufacturerEquipmentStat,GetManufacturerSelect,GetManufacturerByBrandId,GetDealerList,ExportDealer,CreateDealer,UpdateDealer,DeleteDealer,UpdateDealerActive,GetDealer,GetDealerEquipmentStat,GetDealerSelect};
export default {...(request.exec(apis)),...(request.mock(apis))};