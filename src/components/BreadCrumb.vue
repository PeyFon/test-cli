<template>
  <el-breadcrumb separator="/" class="app-breadcrumb">
    <el-breadcrumb-item v-if="_globalSettingStore?.isMultiProject">
      {{ _globalSettingStore.projInfo.name }}
    </el-breadcrumb-item>
    <transition-group name="breadcrumb">
      <template
        v-for="(item, index) in newList"
        :key="item.path + item.redirect + index"
      >
        <!-- <span
          v-if="index == levelList.length - 1 && item.meta.hidden === false"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span> -->
        <el-breadcrumb-item :to="item.fullPath || item.path">
          <span @click="handleClick(index)">
            {{ item?.meta?.title }}
          </span>
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import type {
  RouteLocationNormalized,
  RouteRecordRedirectOption
} from "vue-router";
import { useGlobalSettingStore } from "../store";
// const { proxy } = getCurrentInstance()
// const _router = useRouter()
interface IRoute extends RouteLocationNormalized {
  redirect?: RouteRecordRedirectOption;
}

const _route: IRoute = useRoute();

const _globalSettingStore = useGlobalSettingStore();
const props = defineProps({
  store: {
    type: Object,
    required: true
  }
});
const _routerStore = toRefs(props).store.value;
// let _routerStore.breadcrumbArr = _routerStore.breadcrumbArr;
const showingChildNumber = computed(() => {
  if (_route.matched) {
    const showingChildren = _route.matched[
      _route.matched?.length - 2
    ]?.children.filter(route => {
      //找出显示的路由数组
      if (route?.meta?.hidden) {
        return false;
      } else {
        return true;
      }
    });

    return showingChildren?.length;
  }
  return 0;
});
watch(
  () => _route.matched[_route.matched.length - 2]?.path,
  () => {
    // console.log("监听", showingChildNumber);

    _routerStore.breadcrumbArr = [];
    for (let i = 0; i < _route.matched?.length - 1; i++) {
      _routerStore.breadcrumbArr.push({
        path: _route.matched[i].path,
        redirect: _route.matched[i].redirect,
        name: _route.matched[i].name,
        meta: { ..._route.matched[i].meta }
      });
    }

    // console.log(789456132, _routerStore.breadcrumbArr, _route.matched);
  }
);

let newList = computed(() => {
  const findRouteIndex = _routerStore.breadcrumbArr.findIndex(
    (route: typeof _routerStore.breadcrumbArr[0]) => route.path === _route.path
  );
  // const findShowRoute = _route.matched[_route.matched.length - 2].children.find(
  //   route => route.meta.hidden === false
  // );

  let findRedirectRoute = _route.matched[
    _route.matched.length - 2
  ].children.find(
    route => route.path === _route.matched[_route.matched.length - 2]?.redirect
  );
  // console.log(
  //   "findRouteIndex",
  //   findShowRoute,
  //   findRouteIndex,
  //   findRedirectRoute,
  //   showingChildNumber.value
  // );
  //是否有重复的path
  if (findRouteIndex == -1) {
    // 最后一个路由是否hidden
    if (_route.matched[_route.matched.length - 1].meta.hidden === false) {
      // console.log(
      //   "hidden为false",
      //   _route,
      //   _route.matched[_route.matched.length - 1]
      // );
      //添加push
      _routerStore.breadcrumbArr.push({
        fullPath: _route.fullPath,
        path: _route.path,
        redirect: _route.redirect,
        meta: _route.meta
      });
    } else {
      // 判断它是不是主页
      // console.log("是不是主页", _route.path, findRedirectRoute?.path);
      if (_route.path !== findRedirectRoute?.path) {
        //添加
        _routerStore.breadcrumbArr.push({
          fullPath: _route.fullPath,
          path: _route.path,
          redirect: _route.redirect,
          meta: _route.meta
        });
      } else {
        _routerStore.breadcrumbArr = [];
        for (let i = 0; i < _route.matched.length - 1; i++) {
          _routerStore.breadcrumbArr.push({
            path: _route.matched[i].path,
            redirect: _route.matched[i].redirect,
            name: _route.matched[i].name,
            meta: { ..._route.matched[i].meta }
          });
        }
      }
    }
  } else {
    // console.log("重复的path序号", findRouteIndex);
    _routerStore.breadcrumbArr.splice(findRouteIndex + 1);
  }

  // console.log(
  //   "_routerStore.breadcrumbArr",
  //   _routerStore.breadcrumbArr.find(
  //     route => route.path == _routerStore.selectMenuRoutePath
  //   )
  // );
  return _routerStore.breadcrumbArr;
  //////
  // if (showingChildNumber.value) {
  //   findRedirectRoute = undefined;
  //   console.log("findRedirectRoute", findRedirectRoute);
  // }

  // if (findRouteIndex == -1 && _route.path !== findRedirectRoute?.path) {
  //   _routerStore.breadcrumbArr.push({
  //     fullPath: _route.fullPath,
  //     path: _route.path,
  //     redirect: _route.redirect,
  //     meta: _route.meta
  //   });
  // } else if (findRouteIndex !== -1) {
  //   const index = _routerStore.breadcrumbArr.findIndex(
  //     route => route.redirect === findRedirectRoute?.path
  //   );
  //   console.log("index", index);

  //   if (index) {
  //     // _routerStore.breadcrumbArr.splice(index + 1);
  //   } else {
  //     // _routerStore.breadcrumbArr.splice(findRouteIndex + 1);
  //   }
  // }
  /////////////
  // if (findShowRoute == undefined) {
  //   const findRouteIndex = _routerStore.breadcrumbArr.findIndex(
  //     route =>
  //       route.path === _route.matched[_route.matched.length - 2]?.redirect
  //   );
  //   console.log(11, findRouteIndex);
  //   if (findRouteIndex !== -1) {
  //     _routerStore.breadcrumbArr.splice(findRouteIndex, 1);
  //   }
  // }
  /////////////
  // if (!findShowRoute && findRedirectRoute) {
  //   const findRouteIndex1 = _routerStore.breadcrumbArr.findIndex(
  //     route => route.path === findRedirectRoute.path
  //   );
  //   console.log(123, findRouteIndex1);
  //   findRouteIndex1 !== -1 && _routerStore.breadcrumbArr.splice(findRouteIndex1);
  // }
  // if (findRouteIndex > -1) {
  //   _routerStore.breadcrumbArr.splice(findRouteIndex + 1);
  // }
  ////////////
  // if (_routerStore.breadcrumbArr.length > 0) {
  //   if (findRouteIndex == -1) {
  //     _routerStore.breadcrumbArr.push({
  //       fullPath: _route.fullPath,
  //       path: _route.path,
  //       redirect: _route.redirect,
  //       meta: _route.meta
  //     });
  //   } else {
  //     console.log("删除");
  //     _routerStore.breadcrumbArr.splice(findRouteIndex + 1);
  //   }

  //   console.log("_routerStore.breadcrumbArr", _routerStore.breadcrumbArr);
  //   _routerStore.breadcrumbArr = _routerStore.breadcrumbArr;
  //   return _routerStore.breadcrumbArr;
  // }
});

function handleClick(index: number): void {
  _routerStore.breadcrumbArr.splice(index + 1);
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  margin-left: 20px;
  //   font-size: 14px;
  //   line-height: 50px;

  .no-redirect {
    color: var(--el-text-color-placeholder);
    cursor: text;
  }
}
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
