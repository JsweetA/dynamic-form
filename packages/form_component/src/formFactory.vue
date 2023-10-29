<template>
  <!-- Form -->
  <component :is="componentMap[alias['form']]" :model="data" ref="form">
    <!-- FormItem -->
    <component
      v-for="item of config"
      v-bind="item"
      :is="componentMap[alias['formItem']]"
      :key="item?.field"
    >
      <!-- 表单组件 -->
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
    </component>

    <component :is="componentMap[alias['formItem']]" v-if="$slots?.default">
      <slot></slot>
    </component>
  </component>
</template>

<script setup lang="ts">
import { watch, ref, computed, onMounted } from "vue";
import { deepClone } from "@dynamic-form/utils";

const props = defineProps([
  "modelValue",
  "config",
  "alias",
  "componentMap",
  "formRef",
]);
const emit = defineEmits(["change"]);
const data = ref<any>({});
const form = ref();
const config = computed(() => {
  return props?.config;
});

watch(data.value, () => emit("change", deepClone(data.value)));
onMounted(() => {
  Object.assign(props.formRef, form.value);
  Object.assign(data.value, props.modelValue);
});
</script>
