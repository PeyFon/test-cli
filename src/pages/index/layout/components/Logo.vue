<template>
  <div class="logo">
    <router-link v-if="collapse" to="/">
      <img src="favicon.ico" class="sidebar-logo" style="height: auto" />
    </router-link>
    <router-link v-else to="/">
      <div class="sidebar-title" v-if="_settingStore?.title">
        <div class="title">
          {{ _settingStore.title }}
        </div>
        <div class="subtitle" v-if="_settingStore?.subtitle">
          {{ _settingStore.subtitle }}
        </div>
      </div>
      <img class="sidebar-logo" src="@/assets/logo.png" v-else />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import process from "process";
import { useSettingStore } from "../../store";
// const { proxy } = getCurrentInstance()
// const _router = useRouter()
// const _route = useRoute()
defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
});
const _settingStore = useSettingStore();

// const titles = _globalSettingStore.titles;
</script>

<style lang="scss" scoped>
.logo {
  overflow: hidden;
  text-align: center;
  height: auto;
  // width: auto;
  padding: 10px;
  .sidebar-logo {
    display: inline-block;
    vertical-align: middle;
    // width: calc(100% - 20px);
    height: 50px;
  }
  & .sidebar-title {
    color: var(--el-text-color-primary);
    vertical-align: middle;
    .title {
      word-wrap: break-word;
      word-break: break-all;
      font-weight: 700;
      // line-height: 50px;
      font-size: 20px;
    }
    .subtitle {
      font-size: 14px;
    }
  }
}

.logoFade-enter-active {
  transition: opacity 1.5s;
}

.logoFade-enter,
.logoFade-leave-to {
  opacity: 0;
}
</style>
