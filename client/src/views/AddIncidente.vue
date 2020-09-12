<template>
  <div class="container-add-incidente">
    <div class="header">
        <h3 class="titolo">Aggiungi Nuovo Incidente</h3>
    </div>
    
    <div class="row">
    <form @submit.prevent="salvaIncidente" class="col s12">
      
      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="Autore" required>
            <label>Autore</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 active">
            <input type="text" v-model="Titolo" required>
            <label>Titolo incidente</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="Data" required>
          <label>Data incidente</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="attivita_praticata" required>
          <label>Attività praticata</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="tipo_di_incidente" required>
          <label>Tipo di incidente</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="grado_pericolo_valanghe" required>
            <label>Grado pericolo valanghe quel giorno</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="alt_max_ragg" required>
            <label>Altezza massima raggiunta</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="nr_partecipanti" required>
            <label>Numero di partecipanti</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="nr_persone_coinvolte" required>
            <label>Numero di persone coinvolte</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="descrizione" required>
            <label>Descrizione dell'evento</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="condizioni_meteo" required>
            <label>Condizioni meteo incontrate</label>
        </div>
      </div>
        
      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="misure_prevenzione" required>
            <label>Misure di prevenzione adottate</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="prep_fisica" required>
            <label>Preparazione fisica dei partecipanti</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="commento" required>
            <label>Commento generale</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="intervento_soccorso" required>
            <label>Intervento soccorso</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
            <input type="text" v-model="luogo" required>
            <label>Luogo</label>
        </div>
      </div>
        <button type="submit" class="btn add-incidente">Invia</button>
        
        

    </form>
    </div>
  </div>
</template>

<script>
import db from '../components/firebaseInit'
export default {
  name: "aggiungi-incidente",
  data() {
    return {
      incidente_id: null,
      Titolo: null,
      attivita_praticata: null,
      tipo_di_incidente: null,
      Data: null,
      Autore: null,
      luogo: null,
      grado_pericolo_valanghe: null,
      alt_max_ragg: null,
      nr_partecipanti: null,
      nr_persone_coinvolte: null,
      descrizione: null,
      condizioni_meteo: null,
      misure_prevenzione: null,
      prep_fisica: null,
      commento: null,
      intervento_soccorso: null
    }
  },
  
/* eslint-disable no-unused-vars */
  methods: {
    salvaIncidente () {
      db.collection('incidenti').add({
        Autore: this.Autore,
        incidente_id: this.incidente_id,
        attivita_praticata: this.attivita_praticata,
        Data: this.Data,
        luogo: this.luogo,
        tipo_di_incidente: this.tipo_di_incidente,
        Titolo: this.Titolo,
        grado_pericolo_valanghe: this.grado_pericolo_valanghe,
        alt_max_ragg: this.alt_max_ragg,
        nr_partecipanti: this.nr_partecipanti,
        nr_persone_coinvolte: this.nr_persone_coinvolte,
        descrizione: this.descrizione,
        condizioni_meteo: this.condizioni_meteo,
        misure_prevenzione: this.misure_prevenzione,
        prep_fisica: this.prep_fisica,
        commento: this.commento,
        intervento_soccorso: this.intervento_soccorso

    }).then(docRef => this.$router.push())
    .catch(err => console.log(err))
  }
  }
}
</script>
  
<style scoped>

.container-add-incidente {
  font-family: "Maven Pro", sans-serif;
}

.header {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
}

  .titolo {
    font-size: 32px;
    margin-bottom: 30px;
  }

  label {
    font-size: 16px;
  }

  .btn.add-incidente {  
  padding: 0px 30px;
  background-color: #fa923f;
  color: white;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
}

</style>