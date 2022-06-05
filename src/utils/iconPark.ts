import type { App } from "vue";
import * as icons from "@/components/icons";
// 注册组件用于动态菜单，因为unplugin-icons插件不能用于component这种动态组件，只能用在静态组件上https://github.com/antfu/unplugin-icons/issues/5
export function injectIconParkComponents(app: App<Element>): void {
  Object.keys(icons).forEach(name => {
    app.component(name, icons[name]);
  });
}
