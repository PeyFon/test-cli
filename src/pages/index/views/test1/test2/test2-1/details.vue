<template>
  <div>这是test2 details页面</div>
  <router-link to="/test1/test2/test2-1/edit">去编辑</router-link>
</template>

<script setup lang="ts">
// const { proxy } = getCurrentInstance()
// const _router = useRouter()
const _route = useRoute();
console.log("details-_route: ", _route);
defineOptions({
  name: "test2indexDetails"
});
</script>

<style lang="scss" scoped></style>
