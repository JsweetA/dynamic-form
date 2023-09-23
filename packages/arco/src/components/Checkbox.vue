<template>
  <a-space>
    <a-checkbox-group v-bind="attrs"> </a-checkbox-group>
  </a-space>
</template>

<script setup name="checkbox">
import { useAttrs } from "vue";
const attrs = useAttrs();
</script>
