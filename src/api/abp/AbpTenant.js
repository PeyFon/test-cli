import request from "@/requests/interface";

const FindTenantByName = ismock=>data=> {return request({url: "/abp/multi-tenancy/tenants/by-name/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};
const FindTenantById = ismock=>data=> {return request({url: "/abp/multi-tenancy/tenants/by-id/"+data,method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {FindTenantByName,FindTenantById};
export default {...(request.exec(apis)),...(request.mock(apis))};