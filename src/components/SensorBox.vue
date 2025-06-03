<template>
  <v-row dense>
    <v-col
      v-for="sensor in filteredSensors"
      :key="sensor.id"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card class="sensor-card">
        <v-card-text class="sensor-info">
          <div class="location-info">
            <div class="location">{{ sensor.location }}</div>
            <div class="name">{{ sensor.name }}</div>
          </div>
          <div
            class="temperature"
            :style="{ color: getTemperatureColor(sensor.temperature) }"
          >
            {{ sensor.temperature }}°C
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useFakeApiStore } from "@/stores/fakeApi";
import { colors } from "@/styles/colors";

const props = defineProps<{
  location: string;
}>();

const weatherStore = useFakeApiStore();

function getTemperatureColor(temp: number): string {
  if (temp < 18) return colors.cold;
  if (temp > 25) return colors.hot;
  return colors.normal;
}

const filteredSensors = computed(() => {
  if (!props.location) return weatherStore.weatherData;
  return weatherStore.weatherData.filter((s) => s.location === props.location);
});
</script>

<style lang="scss">
.sensor-card {
  padding: 1rem;
  height: 120px;
  min-height: 120px;
  display: flex;
  align-items: center;
  background-color: rgba(white, 0.8) !important;
  //   margin: 0 0.5em;

  .sensor-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .location {
    font-weight: bold;
    font-size: 1.3rem;
    color: lighten(black, 25%);
  }

  .location-info {
    align-self: flex-start;
    max-width: 70%;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .name {
    color: gray;
  }

  .temperature {
    font-size: 2.5rem;
    font-weight: 300;
    text-align: right;
    white-space: nowrap;
    width: 130px;
  }
}

@media screen and (max-width: 600px) {
  .sensor-card {
    margin: 0 0.5em;
  }

  .v-row--dense {
    margin: 1px !important;
  }
}
</style>
