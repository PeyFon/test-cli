<template>
  <el-container class="app-container">
    <el-header><Header></Header></el-header>
    <el-container style="overflow: hidden">
      <el-aside>
        <Aside :routes="_routerStore.asyncRoutes"></Aside>
      </el-aside>
      <el-main>
        <Section></Section>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Section from "./components/Section.vue";
import { useRouterStore } from "../store";

const _routerStore = useRouterStore();
// const route = useRoute()
defineOptions({
  name: "Layout"
});
</script>
<style lang="scss" scoped>
.app-container {
  height: 100%;

  .el-header {
    background: var(--el-fill-color-blank);
    border-bottom: 1px solid #f0f2f5;
  }
  .el-main {
    padding: 0px;
    margin: 12px;
    border-radius: 4px;
    background-color: var(--el-bg-color-page);
  }
}
</style>
