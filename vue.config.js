/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const Icons = require("unplugin-icons/webpack");
// 引入 Icon自动引入解析器
const IconsResolver = require("unplugin-icons/resolver");
const defineOptions = require("unplugin-vue-define-options/webpack");
const { defineConfig } = require("@vue/cli-service");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = defineConfig({
  // transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      // page 的入口
      entry: "src/pages/index/main.ts",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "测试",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // system: {
    //   // page 的入口
    //   entry: "src/pages/system/main.ts",
    //   // 模板来源
    //   template: "public/system.html",
    //   // 在 dist/system.html 的输出
    //   filename: "system.html",
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: "测试1",
    //   // 在这个页面中包含的块，默认情况下会包含
    //   // 提取出来的通用 chunk 和 vendor chunk。
    //   chunks: ["chunk-vendors", "chunk-common", "system"]
    // }
  },
  devServer: {
    port: 9527, // 端口
    compress: true,
    https: false, // 启用https
    hot: true,

    proxy: {
      // 项目
      [process.env.VUE_APP_PM_API]: {
        target: process.env.VUE_APP_SERVERURL,
        secure: false,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_PM_API]: process.env.VUE_APP_PM_API
        }
      },
      // mock
      ["/mock"]: {
        target: "http://192.168.1.32:3000/mock/12/",
        secure: false,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ["^/mock"]: "/api"
        }
      }
    }
  },
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     api: "@/api",
    //     demo: "@/pages/demo",
    //     index: "@/pages/index",
    //     system: "@/pages/system",
    //   },
    // },
    plugins: [
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        //引入element plus自动api支持
        resolvers: [ElementPlusResolver()],
        imports: ["vue", "vue-router"],
        //为true时在项目根目录自动创建
        dts: "src/types/auto-imports.d.ts",
        // eslint报错解决
        eslintrc: {
          enabled: true, // Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      Icons({
        compiler: "vue3"
        // 自动安装,由于目前只用icon-park，不推荐开启
        // autoInstall: true,
      }),
      Components({
        dts: "src/types/components.d.ts", // 如果安装了“typescript”，则默认情况下自动启用
        resolvers: [
          ElementPlusResolver(),
          // Icon自动引入解析器

          IconsResolver({
            // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            prefix: false,

            // 这是可选的，默认启用 Iconify 支持的所有集合
            enabledCollections: ["icon-park"]
            // 当图标集名字过长时，可使用集合别名
            // alias: {
            //   park: "icon-park",
            // },
          })
        ]
      }),
      //用于配置每个vue文件的name名
      defineOptions()
      // new BundleAnalyzerPlugin() // 分析打包大小使用默认配置
    ]
  },
  chainWebpack: config => {
    // 当iconPark是在线使用时需要以下代码
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        options.compilerOptions = options.compilerOptions || {};
        options.compilerOptions.isCustomElement = tag =>
          tag === "iconpark-icon";
        return options;
      });
  }
});
