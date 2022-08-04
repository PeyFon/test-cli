<template>
  <div class="about">
    <h1>This is an about page -----{{ name1 }}</h1>
    <h2>name:{{ _ownUserStore.name }}</h2>
    <h2>current:{{ _ownUserStore.current }}</h2>
    <h2>getters:{{ _ownUserStore.newName }}</h2>
    <hr style="margin: 20px 0" />
    <el-button @click="resetState">重置状态</el-button>
    <el-button @click="changeState">直接修改state内的值</el-button>
    <el-button @click="changeState$Patch">使用$patch修改state内的值</el-button>
    <el-button @click="changeState$State">使用$state修改state内的值</el-button>
    <el-button @click="changeStateAction">调用action修改state内的值</el-button>
  </div>
  <hr style="margin: 20px 0" />
</template>
<script lang="ts" setup>
import { useOwnUserStore } from "../../../store";
import { storeToRefs } from "pinia";
// const { proxy } = getCurrentInstance()
// const _router = useRouter()
const _route = useRoute();
const _ownUserStore = useOwnUserStore();
console.log(_ownUserStore, "_ownUserStore");

function resetState() {
  _ownUserStore.$reset();
}
function changeState() {
  _ownUserStore.current++;
  _ownUserStore.localData++;
}
function changeState$Patch() {
  _ownUserStore.$patch({
    name: "新的名字"
  });
  // $patch还接受函数
  _ownUserStore.$patch(state => {
    if (state.current > 1006) {
      state.name = "current大于1006";
    }
  });
}
function changeState$State() {
  //这种方式是替换整个store
  _ownUserStore.$state = {
    name: "新的名字state",
    current: 888
  };
}
function changeStateAction() {
  _ownUserStore.setCurrent(999);
}

//解构后具备响应式，解构后的name是ref
const { name: name1 } = storeToRefs(_ownUserStore);

// $subscribe(`callback`, `options?`): () => `void`
//在组件内部调用 store.$subscribe() 时请注意，
// 它将在组件卸载时自动清理，除非disconnected设置为true
_ownUserStore.$subscribe(
  (args, state) => {
    // 只要state有变化就会触发
    console.log("args,state: ", args, state);
  },
  {
    detached: true
    //和一些watch的选项如：deep,flush
  }
);

// $onAction(callback, detached?): () => void
// 注意在组件内部调用 store.$onAction() 时，
// 除非detached分离设置为true，否则当组件被卸载时，它将自动清理。
_ownUserStore.$onAction(args => {
  console.log("onAction--args: ", args);
}, true);

onMounted(() => {
  console.log(_route, "about");
});
</script>
