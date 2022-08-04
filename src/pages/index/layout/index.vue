<template>
  <template v-if="_globalSettingStore.layout === 'aside'">
    <el-container class="app-container">
      <Aside></Aside>
      <el-container style="overflow: hidden" direction="vertical">
        <Header></Header>
        <el-main>
          <Section></Section>
        </el-main>
      </el-container>
    </el-container>
  </template>
  <template v-else>
    <el-container class="app-container" direction="vertical">
      <Header></Header>
      <el-container style="overflow: hidden">
        <Aside v-if="_globalSettingStore.layout === 'mixin'"></Aside>
        <el-main>
          <Section></Section>
        </el-main>
      </el-container>
    </el-container>
  </template>
</template>
<script setup lang="ts">
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Section from "./components/Section.vue";
import { useRouterStore, useGlobalSettingStore } from "../store";

const _routerStore = useRouterStore();
const _globalSettingStore = useGlobalSettingStore();
console.log(11, _globalSettingStore.layout);

// const route = useRoute()
defineOptions({
  name: "Layout"
});
</script>
<style lang="scss" scoped>
.app-container {
  height: 100%;
  background-color: #f0f2f5;
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
