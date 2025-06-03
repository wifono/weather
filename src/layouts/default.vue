<template>
  <v-main>
    <v-app-bar
      style="padding: 0.5em 2em; background: none; box-shadow: none"
      scroll-behavior="hide"
      scroll-threshold="0.5"
    >
      <v-app-bar-title class="app-title"
        >allMeteo <v-icon icon="mdi-weather-cloudy"
      /></v-app-bar-title>
    </v-app-bar>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
.app-title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8em;
  color: white;

  span {
    font-weight: 500;
  }
}

.v-toolbar {
  background-color: none !important;
}

.v-toolbar-title {
  margin-inline-start: 0 !important;
}

@media screen and (max-width: 600px) {
  .app-title {
    display: block;
    text-align: center;
  }
}
</style>
