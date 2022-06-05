import request from "@/requests/interface";

const GetInspectionItem = ismock=>data=> {return request({url: "/IWS/manual-inspection-content/inspection-item/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const SetInspectionItem = ismock=>data=> {return request({url: "/IWS/manual-inspection-content/set-inspection-item/"+data.equipmentTypeId,method: "body",data: data.data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetInspectionItem,SetInspectionItem};
export default {...(request.exec(apis)),...(request.mock(apis))};