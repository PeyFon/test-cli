import request from "@/requests/interface";

const SetXsrfCookie = ismock=>data=> {return request({url: "/AntiForgery/SetXsrfCookie",method: "get",baseURL:ismock ?"/mock": undefined})};

const apis = {SetXsrfCookie};
export default {...(request.exec(apis)),...(request.mock(apis))};