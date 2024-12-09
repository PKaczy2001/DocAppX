<template>
    <div class="favo-page">
      <h2>Favoriten</h2>
      <p>Hier siehst du deine Lieblingsärzte:</p>
      <ul>
        <li v-for="doctor in favoriteDoctors" :key="doctor.id">
          {{ doctor.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'favo',
    data() {
      return {
        favoriteDoctors: [
          { id: 1, name: 'Dr. Müller' },
          { id: 2, name: 'Dr. Meier' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .favo-page {
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
  