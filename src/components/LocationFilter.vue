<template>
  <v-select
    v-model="selected"
    :items="locations"
    label="Filtrovať podľa lokality"
    clearable
    variant="outlined"
    density="compact"
    @update:modelValue="emitFilter"
  />
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from "vue";

const props = defineProps<{
  locations: string[];
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const selected = ref(props.modelValue ?? "");

watch(
  () => props.modelValue,
  (val) => {
    selected.value = val ?? "";
  }
);

function emitFilter(val: string) {
  emit("update:modelValue", val);
}
</script>

<style lang="scss">
.v-input {
  padding: 0.5em;
}
</style>
