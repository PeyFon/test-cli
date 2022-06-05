<template>
  <div style="text-align: center">
    <div class="content">
      <div class="login-title">用户登录</div>
      <el-form :model="form" :rules="rules" ref="formRef" class="form">
        <el-form-item prop="name" style="margin-bottom: 24px">
          <el-input
            size="default"
            class="input-uname"
            placeholder="账户"
            v-model="form.name"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            size="default"
            class="input-upassword"
            type="password"
            placeholder="密码"
            v-model="form.password"
            show-password
          >
          </el-input>
        </el-form-item>
        <div class="login-buttons">
          <el-button
            class="login"
            type="primary"
            @click="login"
            :loading="loading"
            :disabled="loading"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalUserStore, useRouterStore } from "../../store";

const { proxy } = getCurrentInstance();
const _router = useRouter();
const _globalUserStore = useGlobalUserStore();
const _routerStore = useRouterStore();
const _route = useRoute();
const loading = ref(false);

console.log(_route, "_route");

// 判断是否有token
onBeforeMount(async () => {
  if (_globalUserStore.token) {
    await _routerStore.initAsyncRoutes();
    if (_routerStore.asyncRoutes[0].path) {
      _router.replace({ path: _routerStore.asyncRoutes[0].path });
    }
  }
});

const formRef = ref(null);
const form = reactive({
  name: process.env.NODE_ENV === "development" ? "admin" : "",
  password: process.env.NODE_ENV === "development" ? "1q2w3E*" : ""
});
const rules = {
  name: {
    required: true,
    message: "用户名不能为空"
  },
  password: {
    required: true,
    message: "密码不能为空"
  }
};
const login = () => {
  formRef.value.validate(valid => {
    loading.value = true;
     _routerStore.initAsyncRoutes();
    _globalUserStore.user_name = "admin";
    _globalUserStore.user_info = {
      name: "admin",
      id: 123
    };
    loading.value = false;
    if (_route.query.redirect) {
      return _router.replace((_route.query.redirect as string) ?? "/");
    }
    if (_routerStore.asyncRoutes[0].path) {
      return _router.push({ path: _routerStore.asyncRoutes[0].path });
    }
  });
};
</script>

<style lang="scss" scoped></style>
