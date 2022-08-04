<template>
  <el-container style="height: 100%">
    <el-main class="panel affix-container"
      >Main
      <!-- <div class="height"> -->
      <el-affix target=".affix-container" :offset="150">
        <el-page-header>
          <template #content>
            <h2>detasss</h2>
          </template>
        </el-page-header>
      </el-affix>
      <div>23124325</div>
      <!-- </div> -->
    </el-main>
  </el-container>
</template>
<style scoped>
.affix-container {
  text-align: center;
  border-radius: 4px;
  height: 3000px;
  background: var(--el-color-primary-light-9);
}
.height {
  height: 3000px;
}
</style>
