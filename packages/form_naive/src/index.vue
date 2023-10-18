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
</template>

<script setup lang="ts">
import { aliasComp, aliasUI } from "./config";
import * as componentMap from "./parser";
import { formFactory } from "@monorepo/components";
import { toAdaptUI } from "@monorepo/utils";

defineProps(["modelValue", "config", "attrAlias"]);
defineEmits(["update:modelValue"]);
</script>
