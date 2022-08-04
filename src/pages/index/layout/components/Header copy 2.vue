<template>
  <el-header style="padding: 0">
    <div class="header">
      <div style="display: inline-block">
        <div class="left" v-if="_globalSettingStore.layout === 'aside'">
          <el-button
            type="info"
            link
            @click="clickCollapse"
            style="font-size: 16px; margin-left: 20px"
          >
            <SwitchButton></SwitchButton>
          </el-button>
          <BreadCrumb :store="_routerStore"></BreadCrumb>
        </div>
        <div class="left" v-if="_globalSettingStore.layout === 'header'">
          <Logo></Logo>
          <Sidebar mode="horizontal" />
        </div>
      </div>
      <!-- <div class="middle"></div> -->
      <div style="display: inline-block">
        <div class="right">
          <el-tooltip effect="light">
            <template #content>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  width: 100px;
                "
              >
                <!-- <el-button text link>修改密码</el-button> -->
                <el-button text link style="margin-left: 0" @click="logOut"
                  >退出登录</el-button
                >
              </div>
            </template>
            <span class="user-name">{{ _globalUserStore.user_name }}</span>
          </el-tooltip>
        </div>
      </div>
    </div>
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
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
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
}
.logo {
  padding-top: 0;
  padding-bottom: 0;
  width: v-bind("logoWidth");
}
</style>
