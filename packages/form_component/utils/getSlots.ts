import { VNode } from "vue";

export default function (item: any) {
  const slots: { name: string; VNode: VNode }[] = [];
  for (const key in item) {
    if (key.includes("slot")) {
      slots.push({ name: key.replace("slot_", ""), VNode: item[key] });
    }
  }
  return slots;
}
