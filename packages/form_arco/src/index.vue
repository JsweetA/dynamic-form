<template>
  <div>
    <component :is="componentMap['Form']" ref="formRef" :model="modelValue">
      <ItemFactory
        :component-map="componentMap"
        :form-item="componentMap['FormItem']"
        :config="config"
        :alias="alias"
        :data="modelValue"
      ></ItemFactory>
    </component>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from "vue";
import alias, * as componentMap from "./config/index";
import { deepClone, debounce } from "@monorepo/utils";
import { ItemFactory } from "@monorepo/components";

const props = defineProps({
  modelValue: {
    type: Object,
    default: {},
  },
  config: null,
});
const emit = defineEmits(["update:modelValue"]);
const formRef = ref();

// 利用computed属性实现动态配置项
const config = computed(() => {
  return props?.config;
});

watch(
  () => props.modelValue,
  debounce(() => {
    emit("update:modelValue", deepClone(props.modelValue || {}));
  }),
  { deep: true, immediate: true },
);
// 把ref和数据暴露出去
defineExpose({
  ref: formRef.value,
});
</script>

<style lang="scss" scoped>
@mixin Input {
  margin-left: 2px;
  margin-right: 2px;
  background: none;
  outline: none;
  border: none;
  text-align: center;
  color: var(--color-text-1);
  border-bottom: 1px solid var(--color-neutral-6);
}

.mask {
  position: relative;
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "123";
    // background-color: red;
    opacity: 0;
  }
}

.icon {
  z-index: 1000;
  position: absolute;
  right: 1rem;
}
.buttonArea {
  margin: 20px 0 120px 0;
  display: flex;
  justify-content: center;
  button {
    width: 80%;
  }
}

.checkbox {
  width: 80%;
  // background-color: red;
  div span l {
    width: 100% !important;
  }
}
.checkbox_label {
  width: fit-content;
  max-width: 45vw;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  &::after {
    position: relative;
    content: attr("");
  }
}
.textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.inputperson {
  @include Input;
  width: 8rem;
}

.inputyear {
  @include Input;
  width: 3rem;
}
.inputday {
  @include Input;
  width: 2rem;
}
.inputmouth {
  @include Input;
  width: 2rem;
}
</style>
