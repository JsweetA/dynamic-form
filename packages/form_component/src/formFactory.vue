<template>
  <component :is="componentMap[alias['form']]" :model="data">
    <component
      v-for="item of config"
      v-bind="item"
      :is="componentMap[alias['formItem']]"
      :key="item?.field"
    >
      <component
        v-if="item?.type !== 'slot'"
        v-model="data[item?.field]"
        v-on="item.componentEvent || {}"
        v-bind="item.componentProps || {}"
        :is="componentMap[alias[item?.type]]"
      >
        <template
          v-for="[key, VNode] in Object.entries(item.componentSlots || {})"
          :key="key"
          #[key]
        >
          <component :is="VNode"></component>
        </template>
      </component>

      <slot v-else :name="item?.name" :item="item"></slot>
      <!-- {{ alias[item?.type] }} -->
    </component>

    <component :is="componentMap[alias['formItem']]" v-if="$slots?.default">
      <slot></slot>
    </component>
  </component>
</template>

<script setup lang="ts">
import { watch, ref, computed, onMounted } from "vue";
import { deepClone, debounce } from "@monorepo/utils";

const props = defineProps(["modelValue", "config", "alias", "componentMap"]);
const emit = defineEmits(["change"]);
const data = ref<any>({});
const config = computed(() => {
  return props?.config;
});
watch(
  data.value,
  debounce(() => emit("change", deepClone(data.value))),
);

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

onMounted(() => {
  Object.assign(data.value, props.modelValue);
});
</script>
