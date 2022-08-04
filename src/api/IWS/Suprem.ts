import {AwingIWSPMFileDto} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const CreateSuprem = (data:{name:string;baseImg:string;videoName:string;files?:Array<AwingIWSPMFileDto>;[key: string]: unknown;})=> {return request({url: "/IWS/suprem/suprem",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const DeleteSuprem = (data:{id:string;})=> {return request({url: "/IWS/suprem/"+data.id+"/suprem",method:"delete",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSuprem = (data:{id:string;})=> {return request({url: "/IWS/suprem/"+data.id+"/suprem",method:"get",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const GetSupremPageList = (data:{Name?:string;SkipCount?:number;MaxResultCount?:number;})=> {return request({url: "/IWS/suprem/suprem-page-list",method:"get",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {CreateSuprem,DeleteSuprem,GetSuprem,GetSupremPageList};
export default apis;