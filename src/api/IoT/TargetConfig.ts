import {AwingIoTAbstrationsDataType} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const GetPageList = (data:{Name?:string;Tags?:string;DataType?:1|2|3|4|5|6|7|8|9|10|11|12;Remark?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IoT/target-config/page-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const DataTypeSelector = ()=> {return request({url: "/IoT/target-config/data-type-selector",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const Create = (data:{name?:string;cronTime?:string;dataType:AwingIoTAbstrationsDataType;isTrigger:number;remark?:string;[key: string]: unknown;})=> {return request({url: "/IoT/target-config",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const Update = (data:{_params:{Id?:number;};_body:{name?:string;cronTime?:string;dataType:AwingIoTAbstrationsDataType;isTrigger:number;concurrencyStamp?:string;remark?:string;[key: string]: unknown;}})=> {return request({url: "/IoT/target-config?Id="+data._params.Id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const UpdateAllinfo = (data:{Id:number;_body:{name?:string;tagList?:Array<number>;cronTime?:string;dataType:AwingIoTAbstrationsDataType;isTrigger:number;concurrencyStamp?:string;remark?:string;[key: string]: unknown;}})=> {return request({url: "/IoT/target-config/allinfo/"+data.Id,method:"put",ownMethod: "undefined",data: data._body,baseURL:ismock ?"/mock": undefined})};
const Delete = (data:{Id?:number;})=> {return request({url: "/IoT/target-config",method:"delete",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const GetTarget = (data:{Id:number;})=> {return request({url: "/IoT/target-config/target/"+data.Id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetTargetValue = (data:{Id:number;})=> {return request({url: "/IoT/target-config/target-value/"+data.Id,method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const VerifyOperation = (data:{TargetId:number;_params:{OperationRules?:string;};})=> {return request({url: "/IoT/target-config/verify-operation/"+data.TargetId,method:"post",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const AddTargetTag = (data:{TargetId?:number;TagId?:number;})=> {return request({url: "/IoT/target-config/target-tag",method:"post",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const DeleteTargetTag = (data:{TargetId?:number;TagId?:number;})=> {return request({url: "/IoT/target-config/target-tag",method:"delete",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const UpdateOperationRules = (data:{TargetId:number;_params:{OperationRules?:string;};})=> {return request({url: "/IoT/target-config/operation-rules/"+data.TargetId,method:"put",ownMethod: "undefined",params: data._params,baseURL:ismock ?"/mock": undefined})};
const GetTargetListByIds = (data:{targetIds?:Array<number>;})=> {return request({url: "/IoT/target-config/target-list-by-ids",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {GetPageList,DataTypeSelector,Create,Update,UpdateAllinfo,Delete,GetTarget,GetTargetValue,VerifyOperation,AddTargetTag,DeleteTargetTag,UpdateOperationRules,GetTargetListByIds};
export default apis;