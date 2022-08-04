import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const AppendOrUpdateLinkContact = (data:{provider:string;providerKey:string;configurationId:string;linkSource:string;providerDisplayName:string;[key: string]: unknown;})=> {return request({url: "/IoT/link-model/append-or-update-link-contact",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const GetLinkModelById = (data:{linkId:string;_params:{provider:string;};})=> {return request({url: "/IoT/link-model/link-model-by-id/"+data.linkId,method:"get",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const GetLinkModelList = (data:{Provider:string;ProviderKey:string;ConfigurationId:string;LinkSource?:string;ProviderDisplayName?:string;})=> {return request({url: "/IoT/link-model/link-model-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const RemoveByLinkId = (data:{Provioder:string;LinkId:string;})=> {return request({url: "/IoT/link-model/by-link-id",method:"delete",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const RemoveLinkContactByProvider = (data:{Provioder:string;ProviderKey:string;ConfigurationId:string;})=> {return request({url: "/IoT/link-model/link-contact-by-provider",method:"delete",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateBatchLinkContact = (data:{configurationId:string;_params:{provider:string;providerKey:string;};_body:Array<{linkSource:string;providerDisplayName:string;[key: string]: unknown;}>;})=> {return request({url: "/IoT/link-model/batch-link-contact/"+data.configurationId+"?provider="+data._params.provider+"&providerKey="+data._params.providerKey,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};

const apis = {AppendOrUpdateLinkContact,GetLinkModelById,GetLinkModelList,RemoveByLinkId,RemoveLinkContactByProvider,UpdateBatchLinkContact};
export default apis;