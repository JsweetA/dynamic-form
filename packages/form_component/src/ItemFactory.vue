<template>
  <component
    v-for="item of config"
    v-bind="item"
    :is="formItem"
    :key="item?.field"
  >
    <component
      v-if="item?.type !== 'slot'"
      v-model="data[item?.field]"
      v-bind="parseProps(item)"
      v-on="parseEvent(item)"
      :is="componentMap[alias[item?.type]]"
      :placeholder="getPlaceholder(item)"
    />

    <slot v-else :name="item?.name" :item="item"></slot>
    <!-- <component :is="componentMap[alias[item?.type]]" /> -->
  </component>

  <component :is="formItem" v-if="slots.default">
    <slot></slot>
  </component>
</template>

<script setup>
import { parseEvent, parseProps, getPlaceholder } from "../utils";
import { useSlots } from "vue";

const slots = useSlots();
const props = defineProps({
  alias: null, // 别名
  config: null, // 配置项
  data: null, // 双向绑定的数据（利用的引用类型数据逃离了数据单向的限制）
  formItem: null, // formItem
  componentMap: null, // 组件源
});
</script>
