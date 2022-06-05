import request from "@/requests/interface";

const Create = ismock=>data=> {return request({url: "/IWS/maintain-record",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Get = ismock=>data=> {return request({url: "/IWS/maintain-record",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {Create,Get};
export default {...(request.exec(apis)),...(request.mock(apis))};