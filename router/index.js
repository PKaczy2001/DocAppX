import { createRouter, createWebHistory } from 'vue-router';

import CalendarView from '../components/calendar.vue';
import MapView from '../components/map.vue';
import AddEventView from '../components/add.vue';
import EventListView from '../components/eventList.vue';
import FavoritesView from '../components/favo.vue';


const routes = [
  { path: '/calendar', component: CalendarView },
  { path: '/map', component: MapView },
  { path: '/add', component: AddEventView },
  { path: '/eventList', component: EventListView },
  { path: '/favo', component: FavoritesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
