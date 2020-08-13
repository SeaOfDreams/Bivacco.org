<template>
  <div>
    <h1>Registrati</h1>

    <input type="text" name="nome" placeholder="Nome" v-model="nome">
    <input type="text" name="cognome" placeholder="Cognome" v-model="cognome">
    <input type="text" name="collegio" placeholder="Collegio di appartenenza" v-model="collegio">
    <input type="email" name="email" placeholder="Email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button @click="register">Registrati</button>
  </div>
</template>

<script>
import Authservices from '@/services/Authservices'

export default {
  name: "Register",

  data () {
      return {
          nome: '',
          cognome: '',
          collegio: '',
          email: '',
          password: ''
      }
  },

  methods: {
      async register () {
          await Authservices.register({
              nome: this.nome,
              cognome: this.cognome,
              collegio: this.collegio,
              email: this.email,
              password: this.password
          })
          
          
      }
  }
  
};
</script>