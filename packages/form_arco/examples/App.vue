<template>
  <div class="container">
    <d-form v-model="value" ref="form" :config="config" class="form"></d-form>
    <div class="value">
      {{ value }}
    </div>
    <button @click="add">新增</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { configArray } from "./config";

const form = ref({});
const value = ref();
// 如果需要动态添加配置文件，需要ref包装一层
const config = ref(configArray);
const add = () => {};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 248, 250);
  flex-direction: column;
}
.form {
  width: 60%;
  height: 60%;
  border: 1px solid rgb(238, 234, 234);
  display: flex;
  background-color: white;
  padding: 4rem 2rem;
}
.value {
  margin-top: 2rem;
  border: 1px solid rgb(238, 234, 234);
  width: 60%;
  height: 20%;
  background-color: white;
}
</style>
