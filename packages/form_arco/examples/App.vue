<template>
  <div class="container">
    <Hy-form class="form" ref="form" :config="formConfig"></Hy-form>
  </div>
</template>

<script setup>
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
      console.log("password change");
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
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 248, 250);
}
.form {
  width: 60%;
  height: 60%;
  border: 1px solid rgb(238, 234, 234);
  display: flex;
  background-color: white;
  padding: 4rem 2rem;
}
</style>
