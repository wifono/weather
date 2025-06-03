// Utilities
import { defineStore } from "pinia";

interface WeatherSensor {
  id: number;
  name: string;
  location: string;
  temperature: number;
}

export const useFakeApiStore = defineStore("FakeApi", {
  state: (): { weatherData: WeatherSensor[] } => ({
    weatherData: [
      { id: 1, name: "Sensor A", location: "Bratislava", temperature: 25.4 },
      { id: 2, name: "Sensor B", location: "Košice", temperature: 19.8 },
      { id: 3, name: "Sensor C", location: "Poprad", temperature: 15.2 },
      { id: 4, name: "Sensor D", location: "Žilina", temperature: 17.6 },
      { id: 5, name: "Sensor E", location: "Nitra", temperature: 2.0 },
      { id: 6, name: "Sensor F", location: "Trnava", temperature: 20.3 },
      { id: 7, name: "Sensor G", location: "Prešov", temperature: 10.1 },
      {
        id: 8,
        name: "Sensor H",
        location: "Banská Bystrica",
        temperature: 16.7,
      },
      { id: 9, name: "Sensor I", location: "Martin", temperature: 14.5 },
      { id: 10, name: "Sensor J", location: "Zvolen", temperature: 22.1 },
    ],
  }),

  actions: {
    ////// Ak by som bol v reálnom prostredí, dáta by som samozrejme získaval z API, napr. :
    // async getSensors() {
    //   try {
    ////// api preto, lebo axios by mal imporovaný so súboru kde by som ho inicializoval, aby sa využívala jedna a tá istá inštancia - užitočné napríklad pre nastavovanie tokenu
    //   const req = await api.get("/sensors")
    //   this.sensors = req.data
    //   return
    // } catch (error) {
    //   console.error(error)
    // }
    // }
  },
});
