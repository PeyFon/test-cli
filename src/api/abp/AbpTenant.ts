import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const FindTenantByName = (data:{name:string;})=> {return request({url: "/abp/multi-tenancy/tenants/by-name/"+data.name,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const FindTenantById = (data:{id:string;})=> {return request({url: "/abp/multi-tenancy/tenants/by-id/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};

const apis = {FindTenantByName,FindTenantById};
export default apis;