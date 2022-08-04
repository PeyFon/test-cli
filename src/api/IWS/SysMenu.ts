import {
  AwingIWSSysSubmenusComponentDto,
  AwingIWSSysPositionType
} from "../type";
import request from "@/requests/interface";
import { useGlobalSettingStore } from "@/store";
const ismock = useGlobalSettingStore().isMock;

const Create = (data: {
  name: string;
  parentId?: string;
  ico: string;
  component: string;
  submenusComponent?: Array<AwingIWSSysSubmenusComponentDto>;
  [key: string]: unknown;
}) => {
  return request({
    url: "/IWS/sys-menu",
    method: "post",
    ownMethod: "body",
    data: data,
    baseURL: ismock ? "/mock" : undefined
  });
};
const Delete = (data: { id: string }) => {
  return request({
    url: "/IWS/sys-menu/" + data.id,
    method: "delete",
    ownMethod: "undefined",
    baseURL: ismock ? "/mock" : undefined
  });
};
const Update = (data: {
  id: string;
  name: string;
  ico: string;
  component: string;
  submenusComponent?: Array<AwingIWSSysSubmenusComponentDto>;
  concurrencyStamp: string;
  [key: string]: unknown;
}) => {
  return request({
    url: "/IWS/sys-menu",
    method: "put",
    ownMethod: "undefined",
    data: data,
    baseURL: ismock ? "/mock" : undefined
  });
};
const Get = (data: { id: string }) => {
  return request({
    url: "/IWS/sys-menu/" + data.id,
    method: "get",
    ownMethod: "undefined",
    baseURL: ismock ? "/mock" : undefined
  });
};
const MoveTo = (data: {
  id: string;
  relativeId: string;
  position: AwingIWSSysPositionType;
  [key: string]: unknown;
}) => {
  return request({
    url: "/IWS/sys-menu/move-to",
    method: "post",
    ownMethod: "body",
    data: data,
    baseURL: ismock ? "/mock" : undefined
  });
};
const GetTrees = (data: { ParentId?: string }) => {
  return request({
    url: "/IWS/sys-menu/trees",
    method: "get",
    ownMethod: "undefined",
    params: data,
    baseURL: ismock ? "/mock" : undefined
  });
};
const UpdateIsShowInDoc = (
  data: Array<{
    sysMenuId: string;
    isShowInDocMgr: boolean;
    [key: string]: unknown;
  }>
) => {
  return request({
    url: "/IWS/sys-menu/is-show-in-doc",
    method: "put",
    ownMethod: "undefined",
    data: data,
    baseURL: ismock ? "/mock" : undefined
  });
};

const apis = {
  Create,
  Delete,
  Update,
  Get,
  MoveTo,
  GetTrees,
  UpdateIsShowInDoc
};
export default apis;
