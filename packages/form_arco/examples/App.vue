<template>
  <div class="container">
    <Hy-form class="form" v-model="value" :config="configArray"></Hy-form>

    <div class="value">
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { configArray } from "./config";

const value = ref();
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
