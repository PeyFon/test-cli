<template>
  <el-container style="height: 100%">
    <el-main class="panel">
      aboutindex
      <router-link
        :to="{
          path: '/aboutView/about/edit',
          query: {
            name: 'aboutView',
            user: '2-2-2'
          }
        }"
        >去编辑页</router-link
      ></el-main
    >
  </el-container>
</template>

<script setup lang="ts">
// const { proxy } = getCurrentInstance()
// const _router = useRouter()
// const _route = useRoute()
</script>

<style lang="scss" scoped></style>
