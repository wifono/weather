<template>
  <v-container max-width="900">
    <header>
      <h1>Prehľad senzorov</h1>
      <LocationFilter v-model="selectedLocation" :locations="locationOptions" />
    </header>

    <section>
      <SensorBox :location="selectedLocation" />
    </section>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useFakeApiStore } from "@/stores/fakeApi";

const weatherStore = useFakeApiStore();
const locationOptions = computed(() =>
  [...new Set(weatherStore.weatherData.map((s) => s.location))].sort()
);

const selectedLocation = ref("");
//
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  padding: 1em 0;
  margin: 0;
}

section {
  width: 100%;
  display: flex;
}
</style>
