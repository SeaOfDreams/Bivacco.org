<template>
  <div id="vedi-incidente">
    <div class="container">
      <ul class="collection with-header">
          <li class="collection-header"><h4>{{Titolo}}</h4>Data: {{Data}} - Autore: {{Autore}}</li>
          <li class="collection-item">Data: {{Data}} - Autore: {{Autore}}</li>
          <li class="collection-item">Data: {{Data}}</li>
          <li class="collection-item">Attività praticata: {{attivita_praticata}}</li>
          <li class="collection-item">Grado pericolo valanghe:  {{grado_pericolo_valanghe}}</li>
          <li class="collection-item">Altezza massima raggiunta: {{alt_max_ragg}}</li>
          <li class="collection-item">Nr. partecipanti: {{nr_partecipanti}}</li>
          <li class="collection-item">Tipo di evento: {{tipo_di_evento}}</li>
          <li class="collection-item">Tipo di evento: {{tipo_di_evento}}</li>
          <li class="collection-item">Tipo di evento: {{tipo_di_evento}}</li>
          <li class="collection-item">Tipo di evento: {{tipo_di_evento}}</li>
          <li class="collection-item">Tipo di evento: {{tipo_di_evento}}</li>
      </ul>
      <router-link to="/dashboard"><button class="btn back">Indietro</button></router-link>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit"
export default {
  name: "vedi-incidente",
  data() {
    return {
      'attivita_praticata': null,
      'incidente_id': null,
      'tipo_di_evento':  null,
      'Autore': null, 
      'Titolo':  null,
      'Data': null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('incidenti').where('incidente_id', '==', to.params.incidente_id).get()
     .then(querySnapshot => {
       querySnapshot.forEach(doc => {
         next(vm => {
          vm.incidente_id = doc.data().incidente_id
          vm.attivita_praticata = doc.data().attivita_praticata,
          vm.tipo_di_evento =  doc.data().tipo_di_evento,
          vm.Autore = doc.data().Autore,
          vm.Titolo = doc.data().Titolo,
          vm.Data = doc.data().Data,
          vm.grado_pericolo_valanghe = doc.data().grado_pericolo_valanghe,
          vm.alt_max_ragg = doc.data().alt_max_ragg,
          vm.nr_partecipanti = doc.data().nr_partecipanti,
          vm.nr_persone_coinvolte = doc.data().nr_persone_coinvolte,
          vm.descrizione = doc.data().descrizione,
          vm.condizioni_meteo = doc.data().condizioni_meteo,
          vm.misure_prevenzione = doc.data().misure_prevenzione,
          vm.prep_fisica = doc.data().prep_fisica,
          vm.commento = doc.data().commento,
          vm.intervento_soccorso = doc.data().intervento_soccorso,
          vm.luogo = doc.data().luogo
         })
       })
     })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('incidenti').where('incidente_id', '==', this.$route.params.incidente_id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.incidente_id = doc.data().incidente_id
          this.attivita_praticata = doc.data().attivita_praticata
          this.Autore = doc.data().Autore
          this.Titolo = doc.data().Titolo
          this.tipo_di_evento = doc.data().tipo_di_evento
          this.Data = doc.data().Data
          this.grado_pericolo_valanghe = doc.data().grado_pericolo_valanghe
          this.alt_max_ragg = doc.data().alt_max_ragg
          this.nr_partecipanti = doc.data().nr_partecipanti
          this.nr_persone_coinvolte = doc.data().nr_persone_coinvolte
          this.descrizione = doc.data().descrizione
          this.condizioni_meteo = doc.data().condizioni_meteo
          this.misure_prevenzione = doc.data().misure_prevenzione
          this.prep_fisica = doc.data().prep_fisica
          this.commento = doc.data().commento
          this.intervento_soccorso = doc.data().intervento_soccorso
          this.luogo = doc.data().luogo
        })
      })
    }
  }
}
</script>

<style scoped>

.btn.back {  
  padding: 0px 30px;
  background-color: #fa923f;
  color: white;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
}

.collection.with-header {
  display: flex;
  flex-direction: column;
}


</style>