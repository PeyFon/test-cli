<template>
  <a
    v-if="isFrameUrl"
    :href="props.route.meta.frameUrl"
    target="_blank"
    rel="noopener"
  >
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

const isFrameUrl = computed(() => {
  if (props.route?.meta?.frameUrl) {
    return isExternal(props.route.meta.frameUrl);
  } else {
    return false;
  }
});
</script>
