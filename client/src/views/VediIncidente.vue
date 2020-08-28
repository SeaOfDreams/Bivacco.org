<template>
  <div id="vedi-incidente">
    <ul class="collection with-header">
      <li class="collection-header"><h4>
        {{Titolo}}</h4></li>
        <li class="collection-item">Autore: {{Autore}}</li>
        <li class="collection-item">Data: {{Data}}</li>
        <li class="collection-item">Tipo di evento: {{tipo_di_evento}}</li>
    </ul>
    <router-link to="/dashboard"><button class="btn back">Indietro</button></router-link>
    
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
          vm.Data = doc.data().Data
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


</style>