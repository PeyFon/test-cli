import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const FindById = (data:{id:string;})=> {return request({url: "/identity/users/lookup/"+data.id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const FindByUserName = (data:{userName:string;})=> {return request({url: "/identity/users/lookup/by-username/"+data.userName,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Search = (data:{Filter?:string;Sorting?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/identity/users/lookup/search",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetCount = (data:{Filter?:string;})=> {return request({url: "/identity/users/lookup/count",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {FindById,FindByUserName,Search,GetCount};
export default apis;