const axios = require("axios");
const fs = require("fs");
const path = require("path");
const envPath = path.resolve(__dirname, "..", ".env.development");
const envText = fs.readFileSync(envPath, "utf8");
const SERVERURL = /VUE_APP_SERVERURL='(.+)'[\r\n]/g.exec(envText)[1];
const dirPath = path.resolve(__dirname, "..", "src", "api");
let resDataPaths;
let resDataDto;
let importInterfaceArr = new Set();
axios.get(SERVERURL + "/swagger/v1/swagger.json").then(res => {
  resDataPaths = res.data.paths;
  resDataDto = res.data.components.schemas;
  let typeText = "";
  const dtoArr = Object.entries(resDataDto).filter(
    ([key, item]) => !key.includes("[[")
  );
  dtoArr.forEach(([key, item]) => {
    // let template = "";
    if (item.type === "integer") {
      typeText = `${typeText}export type ${key
        .replace(/\./g, "")
        .replace(/\+/g, "")}=${getDtoType(key)};\n`;
    } else {
      typeText = `${typeText}export interface ${key.replace(
        /\./g,
        ""
      )}${getDtoType(key)};\n`;
    }
  });
  // console.log("arr", dtoArr);
  fs.writeFileSync(dirPath + "/" + "type" + ".ts", typeText, "utf8");
  axios.get(SERVERURL + "/api/abp/api-definition").then(res => {
    const resData = res.data;
    Object.values(resData.modules).forEach(async module => {
      const modulePath = path.resolve(dirPath, module.rootPath);
      const exist = fs.existsSync(modulePath);
      !exist && fs.mkdirSync(modulePath);
      // 清空api/module目录下js文件
      await delDir(modulePath);

      //存放所有的actions
      const allActions = [];
      // 存放controllers下的唯一的controllerName数组
      const controllerNameArr = new Set();
      const controllers = Object.values(module.controllers);
      for (let index = 0; index < controllers.length; index++) {
        const controller = controllers[index];
        const fileName = controller.controllerName;
        if (controllerNameArr.has(fileName)) {
          const action = allActions.find(
            item => item.fileName == fileName
          )?.actions;
          Object.assign(action, controllers[index].actions);
        } else {
          allActions.push({
            fileName: fileName,
            actions: controllers[index].actions
          });
          controllerNameArr.add(fileName);
        }
        if (index === controllers.length - 1) {
          console.log(module.rootPath + " : ", controllers.length - 1);
        }
      }
      //生成新的文件并写入内容
      allActions.forEach(item => {
        importInterfaceArr.clear();
        const interfaceName = ["UserOpenIdRelation", "WeChat"].includes(
          item.fileName
        )
          ? "mobileInterface"
          : "interface";
        const text = `import request from "@/requests/${interfaceName}";\nimport { useGlobalSettingStore } from "@/store";\nconst ismock = useGlobalSettingStore().isMock;\n
${Object.values(item.actions)
  .map(function (action) {
    const datas = action.parameters;
    const apiPath = action.url.replace(/^api\//, "/");
    let splitArray = apiPath.split("/");
    const lastName = splitArray.pop();
    const smethod = action.httpMethod;
    if (apiPath.includes("{")) {
      const restNames = apiPath.match(/\{(.+?)\}/g);
      // console.log("restNames", restNames);
      return `const ${getName(action.name)} = (${getReqDataType(
        apiPath,
        smethod
      )})=> {return request({url: "${getRestURL(
        apiPath,
        datas,
        restNames,
        lastName
      )},method:"${smethod.toLowerCase()}",ownMethod: "${getOwnMethodString(
        datas,
        smethod
      )}"${getRestParamString(datas, restNames)},baseURL:${
        /^api\//.test(action.url) ? `ismock ?"/mock": undefined` : `""`
      }})};`;
    }
    return `const ${getName(
      action.name
    )} = (${getReqDataType(apiPath, smethod)})=> {return request({url: "${getUrlString(datas, apiPath)},method:"${smethod.toLowerCase()}",ownMethod: "${getOwnMethodString(datas, smethod)}",${getParamString(datas)}baseURL:${/^api\//.test(action.url) ? `ismock ?"/mock": undefined` : `""`}})};`;
  })
  .join("\n")}\n\nconst apis = {${Object.values(item.actions)
          .map(action => getName(action.name))
          .join(",")}};\nexport default apis;`;
        //拼接要引入的interface字符串
        let interfaceText = "import {";
        for (let item of importInterfaceArr.keys()) {
          interfaceText = interfaceText + item + ",";
        }
        if (interfaceText == "import {") {
          interfaceText = "";
        } else {
          interfaceText = interfaceText.slice(0, -1) + "} from '../type';\n";
        }
        fs.writeFileSync(
          modulePath + "/" + item.fileName + ".ts",
          interfaceText.concat(text),
          "utf8"
        );
      });
    });
  });
});

const isRequired = ":";
const noRequired = "?:";
//获取datatype
function getReqDataType(apiPath, method) {
  const apiData = resDataPaths["/api" + apiPath][method.toLowerCase()];
  let parameterPathText = "";
  let parameterQueryText = "_params:{";
  let bodyText = "_body:";
  let inPath;
  let inQuery;
  if (apiData.parameters) {
    if (apiData.parameters.length) {
      inPath = apiData.parameters.filter(item => item.in === "path");
      inQuery = apiData.parameters.filter(item => item.in === "query");
      if (inPath.length == 0 || inQuery.length == 0) {
        parameterQueryText = "";
      }

      inPath.length &&
        inPath.forEach(item => {
          parameterPathText = `${parameterPathText}${item.name}${
            item.required ? isRequired : noRequired
          }${item.schema.type === "integer" ? "number" : item.schema.type};`;
        });

      inQuery.length &&
        inQuery.forEach(item => {
          parameterQueryText = `${parameterQueryText}${item.name}${
            item.required ? isRequired : noRequired
          }${
            item.schema.type === "integer"
              ? "number"
              : getParameterQueryDataType(item.schema)
          };`;
        });
    } else {
      parameterQueryText = "";
    }
  }
  if (apiData.requestBody) {
    if (apiData.requestBody.content["multipart/form-data"]?.schema.properties) {
      //处理multipart/form-data
      bodyText =
        bodyText +
        getDtoType(
          "",
          apiData.requestBody.content["multipart/form-data"]?.schema
        );
    }

    if (apiData.requestBody.content["application/json"]?.schema.$ref) {
      const dto =
        apiData.requestBody.content["application/json"].schema.$ref.match(
          /\/([^/]*)$/
        )[1];
      bodyText = bodyText + getDtoType(dto);
    }
    if (apiData.requestBody.content["application/json"]?.schema.type) {
      const _schema = apiData.requestBody.content["application/json"]?.schema;
      //目前只处理type为array这种情况，其它未知等将来出现了再补充
      if (_schema.type === "array") {
        if (_schema.items.type) {
          bodyText = `${bodyText}Array<${
            _schema.items.type === "integer" ? "number" : _schema.items.type
          }>`;
        } else {
          bodyText =
            bodyText +
            "Array<" +
            getDtoType(_schema.items.$ref.match(/\/([^/]*)$/)[1]) +
            ">;";
        }
      }
    }
  }
  if (!apiData.parameters && !apiData.requestBody) {
    return "";
  }
  let parameterText = "";
  //先处理path和query这两种情况
  if (inPath?.length && inQuery?.length) {
    //结果：path + query
    parameterText = parameterPathText + parameterQueryText + "};";
  } else {
    //结果：path为空query有值；path有值query为空；path/query都为空
    if (bodyText !== "_body:" && inQuery?.length && inPath?.length == 0) {
      //处理当只有body 和query的情况
      parameterText = "_params:{" + parameterQueryText + "};";
    } else {
      parameterText = parameterPathText + parameterQueryText;
    }
  }

  //当没有apiData.parameters的时候处理下parameterText为空
  if (parameterText === "_params:{") {
    parameterText = "";
  }

  if (bodyText == "_body:") {
    return "data:{" + parameterText + "}";
  } else {
    if (parameterText === "") {
      if (bodyText.endsWith(";")) {
        return "data:" + bodyText.slice(6, -1);
      } else {
        return "data:" + bodyText.slice(6);
      }
    } else {
      return "data:{" + parameterText + bodyText + "}";
    }
  }
}
function getParameterQueryDataType(schema) {
  if (schema.type === "array") {
    if (schema.items.type) {
      return `Array<${
        schema.items.type === "integer" ? "number" : schema.items.type
      }>`;
    } else {
      const dto = schema.items.$ref.match(/\/([^/]*)$/)[1];
      return "Array<" + getDtoType(dto) + ">";
    }
  } else {
    if (schema.type) {
      return schema.type;
    } else {
      const dto = schema.$ref.match(/\/([^/]*)$/)[1];
      return getDtoType(dto);
    }
  }
}
/**
 * 获取dto类型
 * @param {String} Dto  XXX.XXX.XXX dto
 * @return {String}  0|1|2|3枚举或者{key?:value}有大括号的对象
 */
function getDtoType(Dto, data = null) {
  let dtoData;
  if (data) {
    dtoData = data;
  } else {
    dtoData = resDataDto[Dto];
  }
  if (dtoData.type === "integer") {
    let str = "";
    dtoData.enum.forEach(data => {
      str = str + data + "|";
    });
    return str.slice(0, -1);
  } else {
    // 当是oject的时候处理
    let text = "{";
    dtoData.properties &&
      Object.entries(dtoData.properties).forEach(([key, item]) => {
        if (item.type) {
          text = `${text}${key}${item.nullable ? noRequired : isRequired}${
            item.type === "integer" ? "number" : handleBodyDtoText(item)
          };`;
        } else {
          //在生成type文件的时候，去掉nullable这项
          if (!item.nullable) {
            text = `${text}${key}${isRequired}${handleBodyDtoText(item)};`;
          }
        }
      });
    return text + "[key: string]: unknown;}";
  }
}
function handleBodyDtoText(item) {
  if (item.type === "array") {
    if (item.items.type) {
      return `Array<${
        item.items.type === "integer" ? "number" : item.items.type
      }>`;
    } else {
      let dto;
      if (item.items.$ref) {
        dto = item.items.$ref
          .match(/\/([^/]*)$/)[1]
          .replace(/\./g, "")
          .replace(/\+/g, "");
        importInterfaceArr.add(dto);
      } else {
        dto = "unknown"; //默认当unknown去处理,大多数应为number
      }
      return "Array<" + dto + ">";
    }
  } else {
    if (item.type) {
      return item.type === "integer" ? "number" : item.type;
    } else {
      const str = item.$ref
        .match(/\/([^/]*)$/)[1]
        .replace(/\./g, "")
        .replace(/\+/g, "");
      importInterfaceArr.add(str);
      return str;
    }
  }
}
// 清空文件夹内文件
function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    // fs.rmdirSync(path);
  }
}
// 参数
function getParamString(datas) {
  const hasForm = datas.find(data =>
    ["Form", "FormFile"].includes(data.bindingSourceId)
  );
  const hasModel = datas.find(data =>
    ["Query", "ModelBinding"].includes(data.bindingSourceId)
  );
  const hasBody = datas.find(data => data.bindingSourceId === "Body");
  if (hasModel && hasBody) {
    return "data: data._body,"; //getUrlString会把params的参数拼接到url上
  }
  if (hasBody) {
    return "data: data,";
  }
  if (hasModel) {
    return "params: data,";
  }
  if (hasForm) {
    return "data: data,";
  }
  return "";
}
// rest拼接参数
function getRestParamString(datas, restNames) {
  const hasForm = datas.find(data =>
    ["Form", "FormFile"].includes(data.bindingSourceId)
  );
  const hasModel = datas.find(data => data.bindingSourceId === "ModelBinding");
  const hasBody = datas.find(data => data.bindingSourceId === "Body");
  if (datas.length > restNames.length) {
    if (hasModel && hasBody) {
      return ",data: data._body"; //getUrlString会把params的参数拼接到url上
    }
    if (hasBody) {
      return ",data: data._body";
    }
    if (hasModel) {
      return ",params: data._params";
    }
    if (hasForm) {
      return ",data: data._body";
    }
  }
  return "";
}
// 获取url
function getRestURL(url, datas, restNames, lastName) {
  let resUrl = url;
  if (restNames.length === 1) {
    const restName = restNames[0];
    if (restName === lastName) {
      const name = restName.replace(/[{}]/g, "");
      resUrl = url.replace(restName, '"+data.' + name);
      // if (datas.length > restNames.length) {
      //   const name = restName.replace(/[{}]/g, "");
      //   resUrl = url.replace(restName, '"+data.' + name);
      // } else {
      //   resUrl = url.replace(restName, '"+data');
      // }
    } else {
      const name = restName.replace(/[{}]/g, "");
      resUrl = url.replace(restName, '"+data.' + name + '+"') + '"';
      // if (datas.length > restNames.length) {
      //   const name = restName.replace(/[{}]/g, "");
      //   resUrl = url.replace(restName, '"+data.' + name + '+"') + '"';
      // } else {
      //   resUrl = url.replace(restName, '"+data+"') + '"';
      // }
    }
  } else {
    restNames.forEach((restName, index) => {
      const name = restName.replace(/[{}]/g, "");
      if (index === restNames.length - 1) {
        resUrl = resUrl.replace(restName, '"+data.' + name);
      } else {
        resUrl = resUrl.replace(restName, '"+data.' + name + '+"');
      }
    });
  }
  return getUrlString(datas, resUrl, true);
}
// 获取ownMethod名
function getOwnMethodString(datas, method) {
  if (method === "POST") {
    const isBody = datas.find(data => data.bindingSourceId === "Body");
    const isFormFile = datas.find(data => data.bindingSourceId === "FormFile");
    return isBody ? "body" : isFormFile ? "formfile" : "undefined";
  } else {
    return "undefined";
  }
}
function getName(name) {
  return name.replace("Async", "");
}
function getUrlString(datas, path, isRest) {
  const hasForm = datas.find(data => data.bindingSourceId === "ModelBinding");
  const hasBody = datas.find(data => data.bindingSourceId === "Body");
  if (hasForm && hasBody) {
    const splitStr = isRest ? '+"?' : "?";
    const params = datas.filter(
      param => param.bindingSourceId == "ModelBinding"
    );
    return `${path + splitStr}${params
      .map(
        (param, index) =>
          `${param.name}="+data._params.${param.name}${
            index === params.length - 1 ? "" : '+"'
          }`
      )
      .join("&")}`;
  }
  return isRest ? `${path}` : `${path}"`;
}
