<template>
  <a v-if="isFrameUrl" :href="url" target="_blank">
    <slot />
  </a>
  <template v-else>
    <slot />
  </template>
</template>

<script lang="ts" setup>
import { isExternal } from "@/utils/validate";

import { RouteRecordRaw } from "vue-router";
import { PropType } from "vue";

const props = defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>
  }
});
const url = ref<string>(props.route.meta?.frameUrl as string);
const isFrameUrl = computed(() => {
  if (props.route?.meta?.frameUrl) {
    return isExternal(url.value);
  } else {
    return false;
  }
});
</script>
