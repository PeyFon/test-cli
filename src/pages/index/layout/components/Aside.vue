<template>
  <el-aside
    width="auto"
    style="
      border-right: solid 1px var(--el-menu-border-color);
      background-color: var(--el-menu-bg-color);
    "
  >
    <Logo
      :collapse="_settingStore.collapse"
      v-if="_globalSettingStore.layout === 'aside'"
    ></Logo>
    <el-scrollbar class="scroll">
      <Sidebar
        :class="_settingStore.collapse ? 'full-mode' : 'simple-mode'"
        :collapse="_settingStore.collapse"
        :sidebarWidth="sidebarWidth"
      />
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar/Index.vue";
import Logo from "./Logo.vue";
import { useSettingStore, useGlobalSettingStore } from "../../store";
// const { proxy } = getCurrentInstance()
// const _router = useRouter();
// const _route = useRoute()
// const props = defineProps({
//   routes: { type: Array, required: true }
// });
// console.log("props: ", props.routes);

const _settingStore = useSettingStore();
const _globalSettingStore = useGlobalSettingStore();
const sidebarWidth = _globalSettingStore.sidebarWidth;
const scrollHeight =
  _globalSettingStore.layout === "aside" ? "calc(100% - 70px)" : "100%";
</script>

<style lang="scss" scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
.scroll {
  height: v-bind("scrollHeight");
}
.full-mode {
}
.simple-mode {
  width: v-bind("sidebarWidth");
}
</style>
