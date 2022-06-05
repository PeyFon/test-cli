const axios = require("axios");
const fs = require("fs");
const path = require("path");
const envPath = path.resolve(__dirname, "..", ".env.development");
const envText = fs.readFileSync(envPath, "utf8");
const SERVERURL = /VUE_APP_SERVERURL='(.+)'[\r\n]/g.exec(envText)[1];
const dirPath = path.resolve(__dirname, "..", "src", "api");
axios.get(SERVERURL + "/api/abp/api-definition").then(res => {
  const resData = res.data;
  Object.values(resData.modules).forEach(module => {
    const modulePath = path.resolve(dirPath, module.rootPath);
    const exist = fs.existsSync(modulePath);
    !exist && fs.mkdirSync(modulePath);
    // 清空api/module目录下js文件
    delDir(modulePath);
    const controllers = Object.values(module.controllers);
    for (let index = 0; index < controllers.length; index++) {
      const controller = controllers[index];
      const fileName = controller.controllerName;
      const interfaceName = ["UserOpenIdRelation", "WeChat"].includes(fileName)
        ? "mobileInterface"
        : "interface";
      const text = `import request from "@/requests/${interfaceName}";\n
${Object.values(controller.actions)
  .map(function (action) {
    const datas = action.parameters;
    const apiPath = action.url.replace(/^api\//, "/");
    let splitArray = apiPath.split("/");
    const lastName = splitArray.pop();
    const smethod = action.httpMethod;
    if (apiPath.includes("{")) {
      const restNames = apiPath.match(/\{(.+?)\}/g);
      return `const ${getName(
        action.name
      )} = ismock=>data=> {return request({url: "${getRestURL(
        apiPath,
        datas,
        restNames,
        lastName
      )},method: "${getMethodString(datas, smethod)}"${getRestParamString(
        datas,
        restNames
      )},baseURL:${
        /^api\//.test(action.url) ? `ismock ?"/mock": undefined` : `""`
      }})};`;
    }
    return `const ${getName(
      action.name
    )} = ismock=>data=> {return request({url: "${getUrlString(datas, apiPath)},method: "${getMethodString(datas, smethod)}",${getParamString(datas)}baseURL:${/^api\//.test(action.url) ? `ismock ?"/mock": undefined` : `""`}})};`;
  })
  .join("\n")}\n\nconst apis = {${Object.values(controller.actions)
        .map(action => getName(action.name))
        .join(
          ","
        )}};\nexport default {...(request.exec(apis)),...(request.mock(apis))};`;
      if (fs.existsSync(path.resolve(modulePath, fileName + ".js"))) {
        let oldText = fs.readFileSync(
          modulePath + "/" + fileName + ".js",
          "utf-8"
        );
        const oldStr = oldText.replace(/\n\n/g, "").replace(/\n{1}/g, "|");
        const oldNames = oldStr.match(/const\sapis\s=\s\{(.+?)\}/)[1];
        const oldApis = oldStr.match(/interface";(.+);const\sapis\s=/)[1];
        const newStr = text.replace(/\n\n/g, "").replace(/\n{1}/g, "|");
        const newNames = newStr.match(/const\sapis\s=\s\{(.+?)\}/)[1];
        const newApis = newStr.match(/interface";(.+);const\sapis\s=/)[1];
        const mergeStr = `import request from "@/requests/interface";\n${oldApis
          .split("|")
          .join("\n")}\n${newApis
          .split("|")
          .join(
            "\n"
          )};\n\nconst apis = {${oldNames},${newNames}}\nexport default {...(request.exec(apis)),...(request.mock(apis))};`;
        fs.writeFileSync(modulePath + "/" + fileName + ".js", mergeStr, "utf8");
      } else {
        fs.writeFileSync(modulePath + "/" + fileName + ".js", text, "utf8");
      }
      if (index === controllers.length - 1) {
        console.log(module.rootPath + " : ", controllers.length - 1);
      }
    }
  });
});
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
