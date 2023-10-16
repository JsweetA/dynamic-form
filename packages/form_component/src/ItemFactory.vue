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

  <component :is="formItem" v-if="slots?.default">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { parseEvent, parseProps, getPlaceholder } from "../utils";
import { useSlots } from "vue";

const slots = useSlots();
defineProps(["alias", "config", "componentMap", "formItem", "data"]);
</script>
