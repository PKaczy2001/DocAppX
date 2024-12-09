<template>
    <div class="eventList-page">
      <h2>Übersicht</h2>
      <p>Hier siehst du eine Liste deiner bevorstehenden Arzttermine:</p>
      <ul>
        <li v-for="appointment in appointments" :key="appointment.id">
          <strong>{{ appointment.title }}</strong> - {{ appointment.date }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'eventList',
    data() {
      return {
        appointments: [
          { id: 1, title: 'Dr. Müller', date: '2024-12-15' },
          { id: 2, title: 'Augenarzt', date: '2024-12-20' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .eventList-page {
    padding: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  </style>
  