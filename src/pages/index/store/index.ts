import { createPinia } from "pinia";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { useRouterStore } from "./modules/router";
import { useOwnUserStore } from "./modules/ownUser";
import { useSettingStore } from "./modules/setting";

import { useGlobalUserStore, useGlobalSettingStore } from "@/store";

const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);
export {
  useRouterStore,
  useGlobalUserStore,
  useGlobalSettingStore,
  useSettingStore,
  useOwnUserStore
};
export default pinia;
