<template>
	<component
		:is="componentMap[type]"
		v-model="data[(item?.field)]"
		v-bind="parseProps(item)"
		v-on="parseEvent(item)"
		:placeholder="getPlaceholder(item)"
	></component>
</template>

<script setup lang="ts">
import { parseEvent, parseProps, getPlaceholder } from "@utils/core";

defineProps({
	type: null, // 类型
	item: null, // 配置项
	data: null, // 双向绑定的数据
	componentMap: null,
});
// 抽离type 由于直接绑定会把type也绑定上去，导致卡死
</script>
