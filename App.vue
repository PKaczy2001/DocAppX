<template>
<div id="header">
      <h1>DocAppX</h1>
  </div>
  <div id="navigation-container">
  <nav>
    <button @click="$router.push('/calendar')">📅 Kalender</button>
    <button @click="$router.push('/map')">🗺️ Karte</button>
    <button @click="$router.push('/add')">➕ Hinzufügen</button>
    <button @click="$router.push('/eventList')">📋 Übersicht</button>
    <button @click="$router.push('/favo')">⭐ Favoriten</button>
  </nav>
  <router-view /> <!-- Platz, wo die Komponenten entsprechend der Route angezeigt werden -->

</div>

</template>

<script>
import Calendar from "./components/calendar.vue";

export default {
  name: "App",
  components: {
    Calendar,
  },
};
</script>

<style scoped>
/* Optional: Du kannst hier zusätzliche Styles für die App hinzufügen */
h1 {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
}
</style>
