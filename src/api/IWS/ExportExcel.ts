import {SystemComponentModelIContainer,SystemDataSerializationFormat,SystemDataDataSet,SystemGlobalizationCultureInfo,SystemDataDataColumn,SystemComponentModelISite} from '../type';
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const CreateExcel = ()=> {return request({url: "/IWS/export-excel/excel",method:"post",ownMethod: "undefined",baseURL:ismock ?"/mock": undefined})};
const ExportExcel = (data:{container:SystemComponentModelIContainer;designMode:boolean;caseSensitive:boolean;isInitialized:boolean;remotingFormat:SystemDataSerializationFormat;childRelations?:Array<unknown>;columns?:Array<unknown>;constraints?:Array<unknown>;dataSet:SystemDataDataSet;defaultView?:Array<unknown>;displayExpression?:string;extendedProperties?:object;hasErrors:boolean;locale:SystemGlobalizationCultureInfo;minimumCapacity:number;parentRelations?:Array<unknown>;primaryKey?:Array<SystemDataDataColumn>;rows?:Array<unknown>;tableName?:string;namespace?:string;prefix?:string;site:SystemComponentModelISite;[key: string]: unknown;})=> {return request({url: "/IWS/export-excel/export-excel",method:"post",ownMethod: "body",data: data,baseURL:ismock ?"/mock": undefined})};
const CreateExcelFileFromTemplate = (data:{excelName?:string;})=> {return request({url: "/IWS/export-excel/excel-file-from-template",method:"post",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const Download = (data:{exprotFilePath?:string;})=> {return request({url: "/IWS/export-excel/download",method:"post",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};
const CreateWordFileFromTemplate = (data:{wordtype?:string;fileName?:string;})=> {return request({url: "/IWS/export-excel/word-file-from-template",method:"post",ownMethod: "undefined",params: data,baseURL:ismock ?"/mock": undefined})};

const apis = {CreateExcel,ExportExcel,CreateExcelFileFromTemplate,Download,CreateWordFileFromTemplate};
export default apis;