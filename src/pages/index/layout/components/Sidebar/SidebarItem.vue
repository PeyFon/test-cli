<template>
  <template v-if="theNoChild">
    <SidebarItemLink v-if="!route.meta?.hidden" :route="route">
      <el-menu-item
        :index="route.redirect ? route.redirect : route.path"
        :key="route.path"
      >
        <template #title>
          <el-icon>
            <template v-if="route.meta?.icon">
              <component :is="route.meta?.icon"></component>
            </template>
          </el-icon>
          <span>{{ route.meta?.title }}</span>
        </template>
      </el-menu-item>
    </SidebarItemLink>
  </template>
  <el-sub-menu
    v-if="!route.meta?.hidden && !theNoChild"
    :index="route.redirect ? route.redirect : route.path"
  >
    <template #title>
      <el-icon>
        <template v-if="route.meta?.icon">
          <component :is="route.meta?.icon"></component>
        </template>
      </el-icon>
      <span>{{ route.meta?.title }}</span>
    </template>

    <SidebarItem
      v-for="child in route.children"
      :key="child.path"
      :route="child"
    />
  </el-sub-menu>
</template>

<script setup lang="ts">
import SidebarItemLink from "./SidebarItemLink.vue";
import { RouteRecordRaw } from "vue-router";
import { PropType } from "vue";

// const { proxy } = getCurrentInstance()
// const _router = useRouter()
// const _route = useRoute()
const props = defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  }
});
const showingChildNumber = computed(() => {
  if (props.route.children) {
    const showingChildren = props.route.children.filter(route => {
      //找出显示的路由数组
      if (route?.meta?.hidden) {
        return false;
      } else {
        return true;
      }
    });

    return showingChildren.length;
  }
  return 0;
});

const theNoChild = computed(() => {
  if (showingChildNumber.value < 1) {
    return props.route;
  } else {
    return null;
  }
  //   if (showingChildNumber.value > 1) {
  //     return null;
  //   } else if (showingChildNumber.value < 1) {
  //     return props.route;
  //   } else {
  //     const showingChildren = props.route.children.find(route => {
  //       //找出显示的路由
  //       if (route.meta && route.meta.hidden) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     });
  //     return showingChildren;
  //   }
});
</script>

<style lang="scss" scoped></style>
