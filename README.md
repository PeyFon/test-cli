# vue3_ts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# 关于ICON

### 插件部分：

- 图标只使用icon-park，排除掉element-plus自带图标。*因为样式不统一。*
- 使用了unplugin-icons插件，用于自动引入（仅限于静态使用），目前图标集里只放入了icon-park，不做自动安装。*因为做自动安装有可能出现图标集部分名称重合导致打包出错，要避免还得配置别名，同时修改相应的组件名。*

### 使用部分：

- 在**动态菜单**部分必须从icon-park官网上把icon组件下载下来，放在components里，（已做utils里做了全局注册）

- 在其他页面上的使用建议都是用按需引用的方式，目前的自动引入插件无法在动态组件如：  `<component class="xxxx" :is="xxxx"></component>  <el-input v-model="value1" :prefix-icon="xxxx" type="password"></el-input>`上使用，除非也是提前把icon组件下载下来做全局注册。

- 使用方式：

  ```javascript
  //方式1：（建议使用）
  import { BookmarkOne, DocSearchTwo, Search, Lock } from "@icon-park/vue-next";
  //方式2：
  import IconParkLock from "~icons/icon-park/lock";
  //方式3：（自动引用，适用于静态组件）
  //IconPark组件名 或 icon-park-组件名
  <IconParkDocSearchTwo />
  <icon-park-doc-search-two />
  ```

# 关于store

### 使用部分：

- 模块化处理，所有模块都存放在modules里面
- 数据的来源/接口请求原则上是写在每个模块的actions里面，外部只需要调用其封装的方法。

