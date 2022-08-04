<template>
  <el-header style="padding: 0">
    <Sidebar mode="horizontal" id="sidebar111"/>
    <!-- <el-container style="height: 100%">
      <el-main style="padding: 0">
      
      </el-main>
      <el-aside width="500px">Aside</el-aside>
    
    </el-container> -->
  </el-header>
</template>

<script setup lang="ts">
import {
  useGlobalSettingStore,
  useGlobalUserStore,
  useSettingStore,
  useRouterStore
} from "../../store";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { SwitchButton } from "@icon-park/vue-next";
import Logo from "./Logo.vue";
import Sidebar from "./Sidebar/Index.vue";
// const { proxy } = getCurrentInstance()
const _router = useRouter();
// const _route = useRoute()
const _globalSettingStore = useGlobalSettingStore();
const _globalUserStore = useGlobalUserStore();
const _settingStore = useSettingStore();
const _routerStore = useRouterStore();
const Sidebar1 = ref();
const logoWidth =
  Number(_globalSettingStore.sidebarWidth.slice(0, -2)) - 20 + "px"; //logo的padding为20

function clickCollapse() {
  _settingStore.collapse = !_settingStore.collapse;
}

function logOut() {
  _globalUserStore.$patch({
    user_info: {},
    token: "",
    user_name: ""
  });
  _router.push({ path: "/login" });
}
nextTick(() => {
  let dom = document.getElementById("sidebar111");
  let calcWidth = 0;
  let sliceIndex = 0;
  const menuWidth = dom?.clientWidth;
  const moreItemWidth = 64;
  const items = Array.from(dom?.childNodes ?? []) as HTMLElement[];
  items.forEach((item, index) => {
    calcWidth += item.offsetWidth || 0;
    if (calcWidth <= menuWidth - moreItemWidth) {
      sliceIndex = index + 1;
    }
  });
  console.log(
    1,
    "clientWidth:",
    dom.clientWidth,
    "calcWidth:",
    calcWidth,
    "sliceIndex:",
    sliceIndex
  );
});
</script>

<style lang="scss" scoped>
.left {
  display: flex;
  align-items: center;

  .collapse {
    cursor: pointer;
  }
}
.right {
  display: flex;
  align-items: center;
  padding: 0 10px;

  .user-name {
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
    padding-right: 10px;
  }
}

.logo {
  padding-top: 0;
  padding-bottom: 0;
  width: v-bind("logoWidth");
}
</style>
