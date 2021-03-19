<template>
  <div class="container_incidente">
    <div class="box-titolo">
      <span class="titolo">{{ Titolo }}</span> -
      <span class="data">{{ Data | formatDate }}</span>
      <div class="luogo">{{ luogo }}</div>
      <span class="attività">{{ attivita_praticata }}</span>
    </div>
    <!-- End of box-titolo -->

    <div class="inner-container">
      <div class="left-column">
        <span>
          <strong>Autore:</strong>
          {{ Autore }}
        </span>
        <span>
          <strong>Tipo di evento:</strong>
          {{ tipo_di_evento }}
        </span>
        <span>
          <strong>Altitudine massima raggiunta:</strong>
          {{ alt_max_ragg }} m.
        </span>
        <span>
          <strong>Numero partecipanti:</strong>
          {{ nr_partecipanti }}
        </span>
        <span>
          <strong>Numero persone coinvolte:</strong>
          {{ nr_persone_coinvolte }}
        </span>
        <span>
          <strong>Intervento soccorso organizzato:</strong>
          {{ intervento_soccorso }}
        </span>
      </div>
      <!-- End of left column -->

      <div class="right-column">
        <div>
          <h1 class="descrizione">Descrizione</h1>
        </div>

        <div class="container-descrizione">
          <span>{{ descrizione }}</span>
        </div>

        <div>
          <h1 class="descrizione">
            Condizioni meteo incontrate durante la gita 🌤️
          </h1>
        </div>

        <div class="container-descrizione">
          <span>{{ condizioni_meteo }}</span>
        </div>

        <div>
          <h1 class="descrizione">
            Preparazione fisica e tecnica dei partecipanti
          </h1>
        </div>

        <div class="container-descrizione">
          <span>{{ prep_fisica }}</span>
        </div>

        <div>
          <h1 class="descrizione">Misure di prevenzione adottate</h1>
        </div>

        <div class="container-descrizione">
          <span>{{ misure_prevenzione }}</span>
        </div>

        <div>
          <h1 class="descrizione">Commento</h1>
        </div>

        <div class="container-descrizione">
          <span>{{ commento }}</span>
        </div>
      </div>
      <!-- End of right column -->
    </div>

    <div class="back">
      <router-link to="/dashboard">
        <button class="button is-primary">Indietro</button>
      </router-link>
    </div>
    <div class="fixed-action-btn">
      <router-link to="/add" class="float">
        <i class="fa fa-plus my-float"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../components/firebaseInit";
export default {
  name: "vedi-incidente",
  data() {
    return {
      attivita_praticata: null,
      incidente_id: null,
      tipo_di_evento: null,
      Autore: null,
      Titolo: null,
      Data: null,
      grado_pericolo_valanghe: null,
      alt_max_ragg: null,
      nr_partecipanti: null,
      nr_persone_coinvolte: null,
      descrizione: null,
      condizioni_meteo: null,
      misure_prevenzione: null,
      prep_fisica: null,
      commento: null,
      intervento_soccorso: null,
      luogo: null,
      icona: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("incidenti")
      .where("incidente_id", "==", to.params.incidente_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.incidente_id = doc.data().incidente_id;
            (vm.attivita_praticata = doc.data().attivita_praticata),
              (vm.tipo_di_evento = doc.data().tipo_di_evento),
              (vm.Autore = doc.data().Autore),
              (vm.Titolo = doc.data().Titolo),
              (vm.Data = doc.data().Data.toDate("")),
              (vm.grado_pericolo_valanghe = doc.data().grado_pericolo_valanghe),
              (vm.alt_max_ragg = doc.data().alt_max_ragg),
              (vm.nr_partecipanti = doc.data().nr_partecipanti),
              (vm.nr_persone_coinvolte = doc.data().nr_persone_coinvolte),
              (vm.descrizione = doc.data().descrizione),
              (vm.condizioni_meteo = doc.data().condizioni_meteo),
              (vm.misure_prevenzione = doc.data().misure_prevenzione),
              (vm.prep_fisica = doc.data().prep_fisica),
              (vm.commento = doc.data().commento),
              (vm.intervento_soccorso = doc.data().intervento_soccorso),
              (vm.luogo = doc.data().luogo),
              (vm.icona = doc.data().icona),
              (vm.revised = doc.data().revised);
          });
        });
      });
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("incidenti")
        .where("incidente_id", "==", this.$route.params.incidente_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.incidente_id = doc.data().incidente_id;
            this.attivita_praticata = doc.data().attivita_praticata;
            this.Autore = doc.data().Autore;
            this.Titolo = doc.data().Titolo;
            this.tipo_di_evento = doc.data().tipo_di_evento;
            this.Data = doc.data().Data.toDate("");
            this.grado_pericolo_valanghe = doc.data().grado_pericolo_valanghe;
            this.alt_max_ragg = doc.data().alt_max_ragg;
            this.nr_partecipanti = doc.data().nr_partecipanti;
            this.nr_persone_coinvolte = doc.data().nr_persone_coinvolte;
            this.descrizione = doc.data().descrizione;
            this.condizioni_meteo = doc.data().condizioni_meteo;
            this.misure_prevenzione = doc.data().misure_prevenzione;
            this.prep_fisica = doc.data().prep_fisica;
            this.commento = doc.data().commento;
            this.intervento_soccorso = doc.data().intervento_soccorso;
            this.luogo = doc.data().luogo;
            this.icona = doc.data().icona;
            this.revised = doc.data().revised;
          });
        });
    },
  },
};
</script>

<style scoped>
.container_incidente {
  max-width: 1100px;
  margin-top: 120px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;

  font-family: "Maven Pro", sans-serif;
  padding-top: 20px;
}

.box-titolo {
  margin-top: 30px;
  border: 1px solid #ccc;
  padding: 15px;
  max-width: 1100px;
  border-radius: 8px;
  text-align: center;
}

@media (min-width: 320px) and (max-width: 480px) {
  .box-titolo {
    width: 90%;
    margin: 20px;
  }
}

.titolo {
  font-weight: 700;
  font-size: 30px;
}

.luogo {
  font-size: 18px;
  margin-bottom: 12px;
}

span.attività {
  padding: 8px;
  background: #e6e6dd;
  text-transform: uppercase;
  font-size: 14px;
}

.inner-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .inner-container {
    flex-direction: column;
    align-items: center;
  }
}

.left-column {
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  justify-content: flex-start;
}

@media (min-width: 320px) and (max-width: 480px) {
  .left-column {
    width: 90%;
    margin: 20px 0;
  }
}

.right-column {
  width: calc(100% - 30% - 5px);
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
  padding-bottom: 20px;
}

.descrizione {
  padding: 15px 0px 0px 15px;
  font-size: 26px;
  font-weight: 600;
}

.container-descrizione {
  padding: 5px 15px;
  white-space: pre-wrap;
  white-space: pre-line;
}

.back {
  text-align: center;
  padding-top: 30px;
  margin-top: 50px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .back {
    margin-top: 0px;
  }
}

button.is-primary {
  padding: 10px 30px;
  background-color: #f26522;
  color: white;
  border: none;
  font-family: "Maven Pro", sans-serif;
  font-size: 17px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
}

button.is-primary:hover {
  background-color: #fda942;
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #f26522;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}

.my-float {
  margin-top: 22px;
}
</style>