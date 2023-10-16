<template>
  <div v-if="data">
    <component :is="componentMap['Form']" ref="formRef" :model="data">
      <ItemFactory
        :component-map="componentMap"
        :form-item="componentMap['FormItem']"
        :config="config"
        :alias="alias"
        :data="data"
      ></ItemFactory>
    </component>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed, onMounted } from "vue";
import alias, * as componentMap from "./config/index";
import { debounce, deepClone } from "@monorepo/utils";
import { ItemFactory } from "@monorepo/components";

const props = defineProps(["modelValue", "config"]);
const emit = defineEmits(["update:modelValue"]);
const data = ref({});
const formRef = ref();
// 利用computed属性实现动态配置项
const config = computed(() => {
  return props?.config;
});

/**
 * 解析函数：用来将数据解析或者初始化数据
 */
const parse = (config: any) => {
  console.log("first");
  const obj: any = {};
  for (let { field, parseValue } of config) {
    if (parseValue) {
      obj[field] = typeof parseValue === "function" ? parseValue() : parseValue;
    } else {
      obj[field] = "";
    }
  }
  return obj;
};
/**
 * 格式化函数：用来更细粒度的把数据通过想要的形式返回出来
 */
const format = (value: any, config: any) => {
  const obj: any = {};
  for (let { field, formatValue } of config) {
    // value[field] += 1;

    obj[field] = formatValue ? formatValue(value, field, config) : value[field];
  }
  return obj;
};

watch(
  data,
  debounce(() => {
    console.log(1);
    emit("update:modelValue", deepClone(format(data.value, config.value)));
  }),
  { deep: true },
);

onMounted(() => {
  data.value = Object.assign(data.value, parse(config.value));
});
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
