<template>
  <router-view v-slot="{ Component }" :key="$route.fullPath">
    <component :is="Component"></component>
  </router-view>
</template>
<script>
export default {
  name: "Section"
};
</script>
