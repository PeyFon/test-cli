<template>
  <el-container style="height: 100%">
    <el-main class="panel affix-container"
      >Main
      <el-affix target=".affix-container" :offset="40">
        <el-page-header>
          <template #content>
            <h2>detasss</h2>
          </template>
        </el-page-header>
      </el-affix>
      <div>23124325</div>
    </el-main>
  </el-container>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 3000px;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}
</style>
