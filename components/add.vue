<template>
    <div class="add-page">
      <h2>Neuer Termin</h2>
      <p>Füge hier einen neuen Termin oder eine Notiz hinzu:</p>
      <form @submit.prevent="addEntry">
        <label for="title">Titel:</label>
        <input type="text" id="title" v-model="entry.title" required />
  
        <label for="date">Datum:</label>
        <input type="date" id="date" v-model="entry.date" required />
  
        <label for="notes">Notizen:</label>
        <textarea id="notes" v-model="entry.notes"></textarea>
  
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'add',
    data() {
      return {
        entry: {
          title: '',
          date: '',
          notes: '',
        },
      };
    },
    methods: {
      addEntry() {
        console.log('Neuer Eintrag:', this.entry);
        // Hier kannst du den Eintrag speichern
        this.entry = { title: '', date: '', notes: '' };
      },
    },
  };
  </script>
  
  <style scoped>
  .add-page {
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>