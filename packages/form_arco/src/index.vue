<template>
  <div>
    <formFactory
      :modelValue="modelValue"
      :alias="aliasComp"
      :config="toAdaptUI(config, aliasUI)"
      :componentMap="componentMap"
      @change="(e: any) => $emit('update:modelValue', e)"
    />
  </div>
  <!-- <component is="a-input"></component> -->
</template>

<script setup lang="ts">
import { aliasComp, aliasUI } from "./config";
import * as componentMap from "./parser";
import { formFactory } from "@dynamic-form/components";
import { toAdaptUI } from "@dynamic-form/utils";

defineProps(["modelValue", "config", "attrAlias"]);
defineEmits(["update:modelValue"]);
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
