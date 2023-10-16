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
import { IconPlus, IconCheckCircle } from "@arco-design/web-vue/es/icon";

const configArray = [
  {
    type: "password",
    label: "原密码",
    field: "password3",
    rules: [
      {
        required: true,
        message: "原密码不能为空 ",
      },
    ],
    validateTrigger: ["change", "blur"],
    // parseValue: () => "12313",
    slot_prefix: IconPlus,
    slot_suffix: IconCheckCircle,
  },
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
    focus: () => {
      console.log(123);
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
