import request from "@/requests/interface";

const CreateSuprem = ismock=>data=> {return request({url: "/IWS/suprem/suprem",method: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const DeleteSuprem = ismock=>data=> {return request({url: "/IWS/suprem/"+data+"/suprem",method: "delete",baseURL:ismock ?"/mock": undefined})};
const GetSuprem = ismock=>data=> {return request({url: "/IWS/suprem/"+data+"/suprem",method: "get",baseURL:ismock ?"/mock": undefined})};
const GetSupremPageList = ismock=>data=> {return request({url: "/IWS/suprem/suprem-page-list",method: "get",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {CreateSuprem,DeleteSuprem,GetSuprem,GetSupremPageList};
export default {...(request.exec(apis)),...(request.mock(apis))};