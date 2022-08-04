<template>
  <div>
    <el-menu
      v-if="_routerStore.asyncRoutes"
      :default-active="(activeMenu as string)"
      router
      unique-opened
      :mode="mode"
      :collapse="collapse"
      @select="handleSelectMenu"
      :collapse-transition="false"
      style="border-right: none"
    >
      <SidebarItem
        v-for="route in _routerStore.asyncRoutes"
        :key="route.path + route?.id"
        :route="route"
      />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import SidebarItem from "./SidebarItem.vue";
import { useRouterStore } from "../../../store";
// import { findRouteByRedirect } from "@/utils/router.ts";

const _routerStore = useRouterStore();
const _route = useRoute();
defineProps({
  collapse: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: "vertical"
  }
});
const activeMenu = computed(() => {
  // console.log("activeMenuRoute", _route);
  if (_route.meta?.hidden) {
    let _path = _route.matched[_route.matched.length - 1].path;
    // 是否用了动态路由，params传参,/:只能存在于末尾
    if (Object.keys(_route.params).length) {
      const index = _path.indexOf("/:");
      _path = _path.substring(0, index);
    }
    // console.log("_path", _path);

    //排除掉当前path最后一个 / 及其之后的内容
    const upperRoutePath = _path.replace(/(.*)\/{1}.*/, "$1");
    // console.log("upperRoutePath", upperRoutePath);

    const showRoutes = _route.matched[
      _route.matched.length - 2
    ].children.filter(item => item.meta.hidden === false);
    // console.log("showRoutes", showRoutes);
    let findRoute;
    if (showRoutes?.length) {
      //可能找不到
      findRoute = showRoutes.find(route => route.path.includes(upperRoutePath));
    } else {
      findRoute = _route.matched[_route.matched.length - 2];
    }

    // console.log("findRoute", findRoute);

    if (findRoute) {
      return findRoute.redirect ? findRoute.redirect : findRoute.path;
    } else {
      return _route.matched[_route.matched.length - 2].redirect
        ? _route.matched[_route.matched.length - 2].redirect
        : _route.matched[_route.matched.length - 2].path;
    }

    // //判断点击的menu菜单里是否包含upperRoutePath
    // const isIncludePath =
    //   _routerStore.selectMenuRoutePath.includes(upperRoutePath);

    // //判断选中的菜单去掉最后一个 / 后长度是否和 upperRoutePath 长度一致（如：2级菜单和4级菜单就不同）
    // const isLength =
    //   _routerStore.selectMenuRoutePath.replace(/(.*)\/{1}.*/, "$1").length ===
    //   upperRoutePath.length;
    // console.log(889, isIncludePath, upperRoutePath, isLength);
    // if (isIncludePath && isLength) {
    //   return _routerStore.selectMenuRoutePath;
    // } else {
    //   // 处理跨多级、非同类菜单的情况
    //   //通过每个路由的redirect判断是否有 xxx/xxx/index1 的情况，
    //   const redirectPath = findRouteByRedirect(upperRoutePath, [
    //     _route.matched[0]
    //   ]);
    //   if (redirectPath) {
    //     return redirectPath.redirect;
    //   } else {
    //     return upperRoutePath;
    //   }
    // }
  } else {
    return _route.path;
  }
});

watch(activeMenu, () => {
  _routerStore.selectMenuRoutePath = activeMenu.value;
});
const handleSelectMenu = (key: string) => {
  _routerStore.selectMenuRoutePath = key;

  //处理面包屑
  _routerStore.breadcrumbArr = [];
  for (let i = 0; i < _route.matched.length - 1; i++) {
    _routerStore.breadcrumbArr.push({
      path: _route.matched[i].path,
      redirect: _route.matched[i].redirect,
      name: _route.matched[i].name,
      meta: { ..._route.matched[i].meta }
    });
  }
};
</script>
<style lang="scss" scoped></style>
