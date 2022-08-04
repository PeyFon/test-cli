<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App111" /> -->
    <el-button @click="changeStore"> I am ElButton </el-button>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
    <div>时间： {{ value1 }}</div>
    <el-input v-model="inputVal" placeholder="" />
    <p>{{ inputVal }}</p>
    <!-- <el-link type="success">danger</el-link> -->
    <!-- <el-icon><edit /></el-icon> -->
    <el-button type="primary" :icon="Search"> Search </el-button>
    <div>
      <!-- <doc-search-two /> -->
      <search />
    </div>
    <el-icon>
      <search />
    </el-icon>
    <search
      theme="multi-color"
      size="45"
      :fill="['#221225', '#7ed321', '#c05858', '#f5a623']"
      :stroke-width="3"
      stroke-linejoin="bevel"
    />
    <search />
  </div>
  <div style="width: 300px">
    <h5 class="mb-2">Default colors</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <component :is="menuObj.Alarm" class="xxx" />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1"> item one </el-menu-item>
          <el-menu-item index="1-2"> item one </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3"> item three </el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title> item four </template>
          <el-menu-item index="1-4-1"> item one </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <!-- <component :is="'Alarm'"></component> -->
          <iconpark-icon name="bill" />
        </el-icon>
        <!-- <el-icon><icon-menu /></el-icon> -->
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <!-- <el-icon><document /></el-icon> -->
        <span>Navigator Three</span>
      </el-menu-item>
    </el-menu>
  </div>

  <el-input v-model="value1" :prefix-icon="IconParkLock" type="password" />
  <el-input
    v-model="value1"
    :prefix-icon="'Alarm'"
    type="password"
    placeholder="alarm已做全局注册，所以得字符串传"
  />
  <el-input v-model="value1" :prefix-icon="Lock" type="password" />
  <icon-park-doc-search-two />
  <IconParkDocSearchTwo />
  <Lock />

  <IconParkLock />
  <Alarm />
</template>

<script lang="ts" setup>
import { useGlobalUserStore } from "../../store";

import { BookmarkOne, DocSearchTwo, Search, Lock } from "@icon-park/vue-next";

import IconParkLock from "~icons/icon-park/lock";
const _route = useRoute();
// import { ref } from "vue";
// import HelloWorld from "@/components/HelloWorld"; // @ is an alias to /src

let value1 = ref("");
const inputVal = ref("123");
const menuObj = reactive({
  Alarm: "Alarm"
});
const _globalUserStore = useGlobalUserStore();
const changeStore = () => {
  console.log(
    "before:",
    _globalUserStore.user_name1,
    _globalUserStore.user_info
  );
  _globalUserStore.user_name1 += 4;
  _globalUserStore.user_info = { id: 111 };
  _globalUserStore.user_info.id += 3;
  // _globalUserStore.user_info.sex += 1;
  _globalUserStore.addArr();
  _globalUserStore.$patch(state => {
    state.avatar = "9";
  });
  console.log(
    "after:",
    _globalUserStore.user_name1,
    _globalUserStore.user_info
  );
};
onMounted(() => {
  console.log(11, _globalUserStore);
  console.log(_route, "home");
});
</script>
