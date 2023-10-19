<template>
  <div class="container">
    <d-form
      v-model="value"
      ref="form"
      :config="configArray"
      class="form"
    ></d-form>
    <div class="value">
      {{ value }}
    </div>

    <n-input></n-input>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { configArray } from "./config";

const form = ref({});
const value = ref();

watch(form, () => console.log(form.value), { deep: true });
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
