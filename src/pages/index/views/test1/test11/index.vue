<template>
  <el-container style="height: 100%; width: 100%">
    <el-main class="panel">
      <div>test1页面</div>
      <router-link
        :to="{
          name: 'test2-3details',
          params: { userId: '123-456' }
        }"
      >
        params传参，去测试2-3index详情页
      </router-link>
      <div></div>
      <el-button text link style="margin-left: 0" @click="logOut"
        >退出登录</el-button
      >
      <el-button type="info" @click="handleTitle" v-if="isDevelop"
        >修改title</el-button
      >
      <el-button @click="getTableData">调用接口</el-button>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { useGlobalUserStore, useRouterStore } from "../../../store";
import UserManage from "@/api/IWS/UserManage";
import IWSIdentityUser from "@/api/IWS/IWSIdentityUser";
import type { RouteRecordRaw } from "vue-router";
// const { proxy } = getCurrentInstance()
const _router = useRouter();
const _route = useRoute();
const _routerStore = useRouterStore();
const _globalUserStore = useGlobalUserStore();
defineOptions({
  name: "test1"
});
const getTableData = () => {
  UserManage.GetUsersList({
    UserName: "",
    Name: null,
    SkipCount: 0,
    MaxResultCount: 10
  }).then(res => {
    console.log("res", res.data);
  });
};

const isDevelop = JSON.parse(process.env.VUE_APP_ISDEVELOP);
function handleTitle() {
  console.log(_routerStore.breadcrumbArr);
  const arr: Array<RouteRecordRaw> =
    _routerStore.breadcrumbArr as Array<RouteRecordRaw>;
  arr.at(-1).meta.title = "ces";
  // _route.matched.at(-1).meta.title = "ces";
  console.log(_route);
}
console.log(useRoute(), "test1路由");

const logOut = () => {
  _globalUserStore.$patch({
    user_info: {},
    token: "",
    user_name: ""
  });
  _router.push({
    path: "/aboutView",
    query: {
      tn: "ssss"
    }
  });
};

const emit = defineEmits<{
  (e: "handleClick", data: string): void;
  (e: "handleChange", data: Date): void;
}>();

const handleClick = () => emit("handleClick", Date.now() + "");
const handleChange = () => emit("handleChange", Date.now());
</script>

<style lang="scss" scoped></style>
