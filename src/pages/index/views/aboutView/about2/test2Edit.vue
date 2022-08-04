<template>
  <el-container style="height: 100%">
    <el-main class="panel">
      test2Edit
      <test2edit></test2edit>
      <el-button type="info" @click="goBack">后退</el-button>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import test2edit from "../../test1/test2/test2-1/edit";
// const { proxy } = getCurrentInstance()
const _router = useRouter();
const _route = useRoute();
console.log("aboutTest2Edit", _route);
function goBack() {
  _router.back();
}
</script>

<style lang="scss" scoped></style>
