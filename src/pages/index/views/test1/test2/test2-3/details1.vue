<template>
  <el-container style="height: 100%">
    <el-main class="panel"> details </el-main>
  </el-container>
</template>

<script setup lang="ts">
// const { proxy } = getCurrentInstance()
const _router = useRouter();
const _route = useRoute();
console.log("test2-3details", _router.resolve(_route.path));
</script>

<style lang="scss" scoped></style>
