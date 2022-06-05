<template>
  <div class="header">
    <div class="left">
      <h1>模板项目</h1>
    </div>

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
</template>

<script setup lang="ts">
import { useGlobalUserStore } from "../../store";

// const { proxy } = getCurrentInstance()
const _router = useRouter();
// const _route = useRoute()
const _globalUserStore = useGlobalUserStore();
const logOut = () => {
  _globalUserStore.$patch({
    user_info: {},
    token: "",
    user_name: ""
  });
  _router.push({ path: "/login" });
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  .left {
  }
  .right {
    display: flex;
    align-items: center;
    padding: 0 12px;
    .user-name {
      display: inline-block;
      vertical-align: middle;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
