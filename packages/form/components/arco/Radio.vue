<template>
	<a-space size="large">
		<a-radio-group v-bind="attrs" @change="attrs?.change"> </a-radio-group>
	</a-space>
</template>

<script setup name="radio">
import { useAttrs } from 'vue';
const attrs = useAttrs();
</script>
