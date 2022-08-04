<template>
  <div>test2Index 编辑</div>
</template>

<script setup lang="ts">
// const { proxy } = getCurrentInstance()
const _router = useRouter();
const _route = useRoute();
console.log("edit-_route: ", _route, _router.resolve(_route.path));
</script>

<style lang="scss" scoped></style>
