<template>
  <el-scrollbar style="overflow: hidden">
    <el-menu :default-active="activeMenu" router unique-opened>
      <SidebarItem
        v-for="route in _routerStore.asyncRoutes"
        :key="route.path + route?.id"
        :route="route"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import SidebarItem from "./SidebarItem";
import { useRouterStore } from "../../../store";
const _routerStore = useRouterStore();
const _route = useRoute();
const activeMenu = computed(() => {
  console.log("activeMenuRoute", _route);
  console.log(_route.path.replace(/(.*)\/{1}.*/, "$1"));
  if (_route.meta?.hidden) {
    //  当它是隐藏路由时 倒序找它的上一个父级
    for (let i = _route.matched.length - 1; i >= 0; i--) {
      if (_route.matched[i].children?.length) {
        console.log(_route.matched[i].path, 8989);

        return _route.matched[i].redirect
          ? _route.matched[i].redirect
          : _route.matched[i].path;
      }
    }

    // 排除掉最后一个 / 及其之后的内容,并判断不为空
    // const path = _route.path.replace(/(.*)\/{1}.*/, "$1")
    //   ? _route.path.replace(/(.*)\/{1}.*/, "$1")
    //   : _route.path;
    // return path;
  } else {
    return _route.path;
  }
});
</script>
<style lang="scss" scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
