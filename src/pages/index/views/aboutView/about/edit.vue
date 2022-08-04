<template>
  <el-container style="height: 100%">
    <el-main class="panel"
      >about的 edit
      <el-button type="info" @click="goBack">后退</el-button>
      <router-link
        :to="{
          path: '/aboutView/about2/test2Edit',
          query: {
            tn: '44004473_13_oem_dg',
            userId: 15654
          }
        }"
        >去test1/测试2index编辑页</router-link
      >
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
// const { proxy } = getCurrentInstance()
const _router = useRouter();
// const _route = useRoute()
function goBack() {
  _router.go(-1);
}
</script>

<style lang="scss" scoped></style>
