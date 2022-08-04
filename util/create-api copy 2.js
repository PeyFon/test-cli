const axios = require("axios");
const fs = require("fs");
const path = require("path");
const envPath = path.resolve(__dirname, "..", ".env.development");
const envText = fs.readFileSync(envPath, "utf8");
const SERVERURL = /VUE_APP_SERVERURL='(.+)'[\r\n]/g.exec(envText)[1];
const dirPath = path.resolve(__dirname, "..", "src", "api");
axios.get(SERVERURL + "/swagger/v1/swagger.json").then(res => {
  let resDataPaths = res.data.paths;
  let resDataDto = res.data.components.schemas;
  const interfaceName = "interface";

  const finalArr = []; //存放模块名和其function的对象数组

  const moduleNameArr = new Set();
  Object.entries(resDataPaths).forEach(async ([key, item]) => {
    const pathStr = key.slice(4);
    const pathStrArr = pathStr.split("/");
    // console.log(pathStr, pathStrArr);
    await createDir(pathStrArr[1], dirPath);
    const moduleName = Object.values(item)[0].tags[0];
    const modulePath = path.resolve(
      dirPath,
      strToSmallHump(pathStrArr[1]),
      moduleName + ".js"
    );
    let finalText = ""; //存放function文本
    //把api生成文本
    Object.entries(item).forEach(([apiKey, apiItem]) => {});
    if (moduleNameArr.has(moduleName)) {
      const str = finalArr.find(item => item.mdName === moduleName).fnText;
      finalArr.push({
        mdName: moduleName,
        mdPath: modulePath,
        fnText: str + finalText
      });
    } else {
      finalArr.push({
        mdPath: modulePath,
        fnText: finalText
      });
      moduleNameArr.add(moduleName);
    }
    const textTop = `import request from "@/requests/interface";
const ismock = false;
`;

    // console.log(strToSmallHump(pathStrArr[1]), moduleName);
    // !modulePath.includes("AbpApiDefinition") &&
    await fs.writeFileSync(modulePath, textTop, "utf8");

    // console.log(strToSmallHump(moduleName));
    // console.log(11, moduleNameArr);
  });
  // console.log("resData", resDataPaths);
  // console.log("resDataDto", resDataDto);
});
//创建文件夹内文件
function createDir(str, dirPath) {
  const modulePath = path.resolve(dirPath, strToSmallHump(str));
  const exist = fs.existsSync(modulePath);
  !exist && fs.mkdirSync(modulePath);
  // 清空api/module目录下js文件
  delDir(modulePath);
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
    return "data: data.data,";
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
      return ",data: data.data";
    }
    if (hasBody) {
      return ",data: data.data";
    }
    if (hasModel) {
      return ",params: data.data";
    }
    if (hasForm) {
      return ",data: data.data";
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
      if (datas.length > restNames.length) {
        const name = restName.replace(/[{}]/g, "");
        resUrl = url.replace(restName, '"+data.' + name);
      } else {
        resUrl = url.replace(restName, '"+data');
      }
    } else {
      if (datas.length > restNames.length) {
        const name = restName.replace(/[{}]/g, "");
        resUrl = url.replace(restName, '"+data.' + name + '+"') + '"';
      } else {
        resUrl = url.replace(restName, '"+data+"') + '"';
      }
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
// 获取method名
function getMethodString(datas, method) {
  if (method === "POST") {
    const isBody = datas.find(data => data.bindingSourceId === "Body");
    const isFormFile = datas.find(data => data.bindingSourceId === "FormFile");
    return isBody ? "body" : isFormFile ? "formfile" : "post";
  }
  return method.toLowerCase();
}
function getName(name) {
  return name.replace("Async", "");
}
function getUrlString(datas, path, isRest) {
  const hasForm = datas.find(data => data.bindingSourceId === "ModelBinding");
  const hasBody = datas.find(data => data.bindingSourceId === "Body");
  if (hasForm && hasBody) {
    const splitStr = isRest ? '+"?' : "?";
    const params = datas.filter(param => param.bindingSourceId !== "Body");
    return `${path + splitStr}${params
      .map(
        (param, index) =>
          `${param.name}="+data.${param.name}${
            index === params.length - 1 ? "" : '+"'
          }`
      )
      .join("&")}`;
  }
  return isRest ? `${path}` : `${path}"`;
}

//转小驼峰 xx-xxx=>xxXxx
function strToSmallHump(str) {
  return str.replace(/-(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
}
//转大驼峰 xx-xxx=>XxXxx
function strToBigHump(str) {
  return str.replace(/(^|-)(\w)/g, (m, $1, $2) => $2.toUpperCase());
}
