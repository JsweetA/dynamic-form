<template>
	<div class="container">
		<Hy-form class="form" ref="form" :config="formConfig"></Hy-form>
	</div>
</template>

<script setup>
import { formConfig } from "./config";
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
