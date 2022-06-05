<template>
  <div>测试211</div>
  <!-- <router-view></router-view> -->
  <hr />
  <!-- <div @click="push">去往编辑页</div> -->
  <router-link to="/test1/test2/edit">去编辑页</router-link>
  <div></div>
  <router-link
    :to="{ path: '/test1/test2/details', query: { plan: 'private' } }"
    >去详情页</router-link
  >
</template>

<script setup lang="ts">
// const { proxy } = getCurrentInstance()
const _router = useRouter();
const _route = useRoute();
const push = () => {
  _router.push({ path: "/test1/test2/edit" }).catch(err => {
    console.log(err);
  });
};
console.log("test2index路由: ", _route);
</script>

<style lang="scss" scoped></style>
