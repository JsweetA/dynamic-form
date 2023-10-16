<template>
  <div class="container">
    <Hy-form class="form" v-model="value" :config="formConfig"></Hy-form>
    <div class="value">
      {{ value }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { deepClone } from "@monorepo/utils";

const form = ref();
const formConfig = [
  {
    type: "password",
    label: "原密码",
    field: "password",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
      },
    ],
    validateTrigger: ["change", "blur"],
    change: () => {
      console.log("password change1");
    },
  },
  {
    type: "input",
    label: "原密码",
    field: "password2",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
      },
    ],
    validateTrigger: ["change", "blur"],
    change: () => {
      console.log("password change2");
    },
  },
  {
    type: "password",
    label: "新密码",
    field: "newpsw",
    rules: [
      {
        required: true,
        message: "新密码不能为空 ",
      },
    ],
    validateTrigger: ["change", "blur"],
  },

  {
    type: "password",
    label: "确认密码",
    field: "repsw",

    rules: [
      {
        required: true,
        message: "确认密码不能为空 ",
      },
    ],
    validateTrigger: ["change", "blur"],
  },
  // {
  // 	type: "slot",
  // 	name: "buttonArea",
  // },
];

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
