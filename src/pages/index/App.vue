<template>
  <el-config-provider v-bind="configProvider">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { useGlobalSettingStore } from "./store";
const configProvider: Record<string, any> =
  useGlobalSettingStore().configProvider;
</script>
<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
