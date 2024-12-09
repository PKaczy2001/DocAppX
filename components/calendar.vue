<template>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FullCalendar Example</title>
</head>
<body>
    <div id ="calendar"></div>

    <!-- Ausblenden der Liste-->
    <div>
        <button @click="showSection = !showSection">
        {{ showSection ? 'Verstecken' : 'Zeigen' }}
        </button>
    
    
        <div id ="event" v-show ="showSection">
            <form @submit.prevent="eventPage" id="eventForm">
                <input type="text" v-model="newEvent.title" placeholder="EventName" required>
                <input type="text" v-model="newEvent.date" placeholder="YYYY-MM-DD">
                <input type="text" v-model="newEvent.time" placeholder="00:00">
                <textarea v-model="newEvent.description" placeholder="Description"></textarea>
                <button type="button" id="addEventButton" @click ="eventPage">Add Event</button>
            </form>
        </div>
    </div>
</body>
</html>
  </template>
  
<script>
    import { Calendar } from '@fullcalendar/core';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import interactionPlugin from '@fullcalendar/interaction';
    

    export default {
  data() {
    return {
        showSection: false, // Steuert die Sichtbarkeit des Formulars
      calendar: null, // Speichert die Kalender-Instanz
      newEvent: {
        title: '', // Titel des neuen Events
        date: '', // Datum des neuen Events
        time: '', // Zeit des neuen Events
        description: '', // Beschreibung des neuen Events
      },
    };
  },

  mounted(){
    //initialisierung des Kalender
    const calendarEl = this.$el.querySelector('#calendar');
    this.calendar = new Calendar(calendarEl,{
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        //Erkennung vom Datumklick und response 
        dateClick:(info) => {
            this.newEvent.date = info.dateStr;
            this.showSection = true;
      },    
});
    this.calendar.render();
    },
    methods: {
        eventPage(){
            if(this.newEvent.title && this.newEvent.date){
                const eventStart = this.newEvent.date
                ? `${this.newEvent.date}T${this.newEvent.time}`: this.newEvent.date;

                this.calendar.addEvent({
                    title: this.newEvent.title,
                    start: eventStart,
                    description: this.newEvent.description,
                });

                this.newEvent= { title: '', date: '', time: '', description: ''};
                this.showSection = false; 

            } else {
        alert('Bitte alle Pflichtfelder ausfüllen.');
      }
        },
    },
};
</script>

<style>
#calendar {
  max-width: 800px; /* Maximale Breite des Kalenders */
  max-height: 600px; /* Maximale Höhe des Kalenders */
  margin: 0 auto; /* Zentriere den Kalender horizontal */
  overflow: hidden; /* Verhindere, dass Inhalte über den Bereich hinausgehen */
  padding: 10px; /* Optional: Innenabstand */
  border: 1px solid #ccc; /* Optional: Rahmen */
  background-color: #f9f9f9; /* Optional: Hintergrundfarbe */
  border-radius: 8px; /* Optional: Abgerundete Ecken */
}


/*EVENT*/

#eventForm {

    display: none;

    border: 2px solid #007BFF; /* 2px dicker, blauer Rand */
    padding: 20px; /* Innenabstand für den Rand */
    border-radius: 8px; /* Optional: Abgerundete Ecken */
    
    display: flex; /* Verwende Flexbox */
    flex-direction: column; /* Ordne die Elemente vertikal an */
    gap: 10px; /* Abstand zwischen den Eingabefeldern */
    max-width: 400px; /* Optionale maximale Breite */
    margin: 0 auto; /* Zentriere das Formular */
}

#eventForm input,
#eventForm textarea,
#eventForm button {
    width: 95%; /* Eingabefelder sollen die volle Breite nutzen */
    padding: 10px; /* Innenabstand für bessere Lesbarkeit */
    border: 1px solid #ccc; /* Rahmenfarbe */
    border-radius: 5px; /* Abgerundete Ecken */
    font-size: 1rem; /* Einheitliche Schriftgröße */
}

#addEventButton {
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

#addEventButton:hover {
    background-color: #0056b3; /* Hover-Effekt */
}


</style>
