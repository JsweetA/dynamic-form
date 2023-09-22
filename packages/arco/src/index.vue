<template>
	<div>
		<a-form ref="formRef" :model="fData" label-align="right" auto-label-width>
			<a-form-item class="formItem" v-for="item of config" v-bind="item" :key="item?.field">
				<ItemFactory
					v-if="item?.type !== 'slot'"
					:type="item?.type"
					:item="item"
					:data="fData"
					:componentMap="componentMap"
				/>

				<slot v-else :name="item?.name" :item="item"></slot>
			</a-form-item>

			<a-form-item v-if="slots.default">
				<slot></slot>
			</a-form-item>
		</a-form>
	</div>
</template>

<script setup lang="ts">
import { watch, ref, useSlots, computed } from "vue";
import { ItemFactory } from "@hy-form/components";
import { deepClone } from "@hy-form/utils";
import { componentMap } from "./components";

const slots = useSlots();
const props = defineProps({
	config: {
		default: null,
		type: Array<any>,
	},
	formData: {
		default: null,
		type: Object,
	},
});
const fData = ref();
const formRef = ref();

// 利用computed属性实现动态配置项
const config = computed(() => {
	return props?.config;
});

watch(
	() => props.formData,
	() => {
		// 通过配置文件格式化数据
		fData.value = deepClone(props?.formData) || {};
	},
	{
		deep: true,
		immediate: true,
	},
);

const validate = () => {
	return formRef.value.validate((validate: any) => {
		return !!validate;
	});
};
// 把ref和数据暴露出去
defineExpose({
	validate,
	ref: formRef.value,
	data: fData,
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
