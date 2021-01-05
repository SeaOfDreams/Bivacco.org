<template>
<div class="outer-container">
  <div class="container-add-incidente">
    <div class="header">
        <h3 class="titolo">Aggiungi Nuovo Incidente</h3>
    </div>
    
    
      <form @submit.prevent="salvaIncidente">

        <div class="field">          
          <label class="label">Titolo Incidente</label>       
          <div class="control">
            <input class="input" type="text" placeholder="Dai un titolo descrittivo" v-model="Titolo" required>
          </div>
        </div>

        <div class="field">          
          <label class="label">Luogo</label>       
          <div class="control">
            <input class="input" type="text" placeholder="Dove è avvenuto" v-model="luogo" required>
          </div>
        </div>

        <b-field
          label="Quando è successo?">
            <b-datepicker
                ref="datepicker"
                expanded
                placeholder="Seleziona una data"
                v-model="Data" required>
            </b-datepicker>
            <b-button
                @click="$refs.datepicker.toggle()"
                icon-left="calendar-today"
                type="is-primary" />
        </b-field>

        <b-field
            label="Attività praticata">
            <b-select placeholder="Seleziona un'opzione" expanded v-model="attivita_praticata">
                <option value="Alpinismo">Alpinismo, Alta montagna</option>
                <option value="Sci alpinismo - fuoripista">Sci alpinismo, fuoripista</option>
                <option value="Cascate di ghiaccio, misto">Cascate di ghiaccio, misto</option>
                <option value="Arrampicata su roccia">Arrampicata su roccia</option>
                <option value="Escursionismo">Escursionismo</option>
                <option value="Vie Ferrate">Vie ferrate</option>
                <option value="Racchette da neve">Racchette da  neve</option>
                <option value="Mountain Bike">Mountain Bike</option>
            </b-select>
        </b-field>

        <div class="field">
          <label class="label">Tipo di incidente</label>
          <div class="control">
            <input class="input" type="text" placeholder='Es. "valanga" oppure "caduta pietre"'  v-model="tipo_di_incidente" required>
          </div>
        </div>

        <b-field label="Grado pericolo valanghe">
            <b-numberinput controls-position="compact" min="1" max="5" v-model="grado_pericolo_valanghe" required>
            </b-numberinput>
        </b-field>

        <b-field label="E' intervenuto il soccorso organizzato?">
            <b-select v-model="intervento_soccorso" required>
                <option>SI</option>
                <option>NO</option>
            </b-select>
        </b-field>

         <div class="field">          
          <label class="label">Quota massima raggiunta</label>       
          <div class="control">
            <input class="input" type="text" placeholder="Es. 3.843" v-model="alt_max_ragg">
          </div>
        </div>

        <b-field label="Numero partecipanti">
            <b-numberinput controls-position="compact" v-model="nr_partecipanti" required>
            </b-numberinput>
        </b-field>

        <b-field label="Numero persone coinvolte">
            <b-numberinput controls-position="compact" v-model="nr_persone_coinvolte" required>
            </b-numberinput>
        </b-field>

        <b-field label="Descrivi l'evento">
            <b-input type="textarea" rows="10" placeholder="Descrivi l'evento. Evita di menzionare nomi e cognomi di persone coinvolte." required v-model="descrizione"></b-input>
        </b-field>

        <b-field label="Condizioni meteo incontrate">
            <b-input type="textarea" v-model="condizioni_meteo" required></b-input>
        </b-field>

        <b-field label="Misure di prevenzione">
          <b-input type="textarea" placeholder="Descrivi che tipo di misure di prevenzione sono state adottate. Esempio 'Mantenimento distanze di sicurezza nell attraversamento del pendio'" v-model="misure_prevenzione" required></b-input>
        </b-field>

        <b-field label="Preparazione fisica e tecnica dei partecipanti">
          <b-input type="textarea"  v-model="prep_fisica" required></b-input>
        </b-field>

        <b-field label="Commento generale">
          <b-input type="textarea" rows="15" placeholder="Inserisci, se lo desideri, i tuoi commenti personali. Ad esempio cosa pensi si sarebbe potuto fare per evitare l'evento e ogni altra osservazione che pensi possa servire ad altri per evitare di ripetere eventuali errori." v-model="commento" required></b-input>
        </b-field>        
          
        <div class="row">
          
            <button type="submit" class="btn add-incidente">Invia</button>
          
        </div>
          

      </form>
    
  </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import db from '../components/firebaseInit'
import emailjs from 'emailjs-com'

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
      salvaIncidente (e) {
      db.collection('incidenti').add({
        Autore: this.Autore,
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
    .catch(err => console.log(err));
    try {
          emailjs.sendForm('service_vna6o2g', 'template_4u3ylio', e.target,
          'user_pG9Ddcf3K98OFcXFd4txk', {
            Titolo: this.Titolo
          })

        } catch(error) {
            console.log({error})
        }

        // Reset form field
      this.Autore = '',
      this.attivita_praticata = '',
      this.Data = '',
      this.luogo = '',
      this.tipo_di_incidente = '',
      this.Titolo = '',
      this.grado_pericolo_valanghe = '',
      this.alt_max_ragg = '',
      this.nr_partecipanti = '',
      this.nr_persone_coinvolte = '',
      this.descrizione = '',
      this.condizioni_meteo = '',
      this.misure_prevenzione = '',
      this.prep_fisica = '',
      this.commento = '',
      this.intervento_soccorso = ''

  }, 
  
  }
}
</script>
  
<style scoped>

form {
  width: 40%;
}

.container-add-incidente {
  font-family: "Maven Pro", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}

.header {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
}


  .titolo {
  text-align: center;  
  font-size: 38px;
  color: #000; 
  font-weight: 600;
  margin-bottom: 60px;
  }

  label {
    font-size: 16px;
  }



.field:not(:last-child) {
    margin-bottom: 1.5rem;
}

.row {
  text-align: center;
}





</style>