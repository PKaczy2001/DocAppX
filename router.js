import Vue from 'vue';
import VueRouter from 'vue-router';

import Calendar from './components/calendar.vue'; // Importiere die Kalenderkomponente
import Map from './components/map.vue'; // Importiere die Karte
import Add from './components/add.vue'; // Importiere das Hinzufügen
import Overview from './components/eventList.vue'; // Importiere die Übersicht
import Favorites from './components/favo.vue'; // Importiere die Favoriten

Vue.use(VueRouter);

// Definiere die Routen
const routes = [
  { path: '/calendar', component: Calendar, name: 'Calendar' },
  { path: '/map', component: Map, name: 'Map' },
  { path: '/add', component: Add, name: 'Add' },
  { path: '/eventList', component: Overview, name: 'eventList' },
  { path: '/favo', component: Favorites, name: 'favo' },
  { path: '*', redirect: '/calendar' }, // Fallback-Route (z. B. bei ungültiger URL)
];

// Erstelle den Router
const router = new VueRouter({
  mode: 'history', // Für saubere URLs (ohne #)
  routes,
});

export default router;
