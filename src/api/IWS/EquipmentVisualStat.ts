import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetEquipmentAssetStatusStat = ()=> {return request({url: "/IWS/equipment-visual-stat/equipment-asset-status-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetEquipmentTypeStat = ()=> {return request({url: "/IWS/equipment-visual-stat/equipment-type-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetEquipmentOverviewStat = ()=> {return request({url: "/IWS/equipment-visual-stat/equipment-overview-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetFaultAnalysisStat = ()=> {return request({url: "/IWS/equipment-visual-stat/fault-analysis-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetInspectionAnalysisStat = ()=> {return request({url: "/IWS/equipment-visual-stat/inspection-analysis-stat",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {GetEquipmentAssetStatusStat,GetEquipmentTypeStat,GetEquipmentOverviewStat,GetFaultAnalysisStat,GetInspectionAnalysisStat};
export default apis;