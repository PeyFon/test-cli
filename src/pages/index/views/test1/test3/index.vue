<template>
  <el-container style="height: 100%">
    <el-main class="panel">
      test3index
      <router-link
        :to="{
          path: '/test1/test3/edit',
          query: {
            tn: '44004473_13_oem_dg',
            userId: 15654
          }
        }"
        >去编辑页</router-link
      >
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
// const { proxy } = getCurrentInstance()
// const _router = useRouter()
// const _route = useRoute()
</script>

<style lang="scss" scoped></style>
