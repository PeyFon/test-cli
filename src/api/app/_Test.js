import request from "@/requests/interface";

const SendTestSysMessage = ismock=>data=> {return request({url: "/IWS/_Test/SendTestSysMessage",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {SendTestSysMessage};
export default {...(request.exec(apis)),...(request.mock(apis))};