<template>
  <div id="dashboard">
    <div class="col s10 m7">
      <h3 class="header">Incidenti</h3>
      <div class="card horizontal" v-for="incidente in incidenti" v-bind:key="incidente.id">
        <div class="card-stacked">
          <div class="card-content">
            <div class="top_card">
              <p class="inizio_card">{{incidente.Data}} - Autore: {{incidente.Autore}}</p><h5>{{incidente.Titolo}}</h5>
              <p>Luogo: {{incidente.luogo}}</p>
              
            </div>          
          </div>
          <div class="card-action">
            <router-link v-bind:to="{name:'vedi-incidente', params: {incidente_id: incidente.incidente_id}}"><button class="vedi_gita">Vedi</button>
            </router-link>
          </div> 
        </div>
      </div>
    </div>

    <div class="fixed-action-btn">
      <router-link to="/add" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit"
export default {
  name: "Dashboard",
  data() {
    return {
      incidenti: [],
      
          
      
      
    }
  },
  created() {
    db.collection("incidenti").orderBy('Data')      
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'luogo': doc.luogo,
            'incidente_id': doc.data().incidente_id,
            'attivita_praticata': doc.data().attivita_praticata,
            'tipo_di_evento': doc.data().tipo_di_evento,
            'Autore': doc.data().Autore,
            'Titolo': doc.data().Titolo,
            'Data': doc.data().Data,
            'grado_pericolo_valanghe': doc.data().grado_pericolo_valanghe,
            'alt_max_ragg': doc.data().alt_max_ragg,
            'nr_partecipanti': doc.data().nr_partecipanti,
            'nr_persone_coinvolte': doc.data().nr_persone_coinvolte,
            'descrizione': doc.data().descrizione,
            'condizioni_meteo': doc.data().condizioni_meteo,
            'misure_prevenzione': doc.data().misure_prevenzione,
            'prep_fisica': doc.data().prep_fisica,
            'commento': doc.data().commento,
            'intervento_soccorso': doc.data().intervento_soccorso,
            'luogo': doc.data().luogo
            }
            
            this.incidenti.push(data);
        })
      })
  }
}
</script>

<style scoped>
h1,
h3 {
  text-align: center;
}

p.inizio-card {
  font-size: 15px;
}

.card.horizontal {
  border-radius: 5px;
}

.card-action {
  text-align: center;
}

button.vedi_gita {
  min-width: 120px;
  padding: 10px 30px;
  background-color: #fa923f;
  color: white;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.fa.fa-plus {
  background-color:#fa923f;
}
</style>