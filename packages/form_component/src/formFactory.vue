<template>
  <component :is="componentMap.Form" ref="formRef" :model="data">
    <component
      v-for="item of config"
      v-bind="item"
      :is="componentMap.FormItem"
      :key="item?.field"
    >
      <component
        v-if="item?.type !== 'slot'"
        v-model="data[item?.field]"
        v-bind="parseProps(item)"
        v-on="parseEvent(item)"
        :is="componentMap[alias[item?.type]]"
        :placeholder="getPlaceholder(item)"
      >
        <template v-for="slot of getSlots(item)" :key="slot.name" #[slot.name]>
          <component :is="slot.VNode"></component>
        </template>
      </component>

      <slot v-else :name="item?.name" :item="item"></slot>
    </component>

    <component :is="componentMap.FormItem" v-if="$slots?.default">
      <slot></slot>
    </component>
  </component>
</template>

<script setup lang="ts">
import { watch, ref, computed, onMounted } from "vue";
import { deepClone, debounce } from "@monorepo/utils";
import { parseEvent, parseProps, getPlaceholder, getSlots } from "../utils";

const props = defineProps(["modelValue", "config", "alias", "componentMap"]);
const emit = defineEmits(["change"]);
const data = ref<any>({});
const config = computed(() => {
  return props?.config;
});

// /**
//  * 初始化函数：用来将数据解析或者初始化数据
//  */
// const initData = (config: any) => {
//   const obj: any = {};
//   for (let { field, initValue } of config) {
//     if (initValue) {
//       obj[field] = typeof initValue === "function" ? initValue() : initValue;
//     } else {
//       obj[field] = "";
//     }
//   }
//   return obj;
// };
// /**
//  * 格式化函数：用来更细粒度的把数据通过想要的形式返回出来
//  */
// const format = (value: any, config: any) => {
//   const obj: any = {};
//   for (let { field, formatValue } of config) {
//     // console.log();
//     obj[field] = formatValue ? formatValue(value, field, config) : value[field];
//   }
//   return obj;
// };

watch(
  data.value,
  debounce(() => emit("change", deepClone(data.value))),
);

onMounted(() => {
  Object.assign(data.value, props.modelValue);
});
</script>
