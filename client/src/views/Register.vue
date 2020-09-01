<template>
  <!-- <div>
    <h1>Registrati</h1>

    <form class="form">
      <input type="text" name="nome" placeholder="Nome" v-model="nome" />
      <input type="text" name="cognome" placeholder="Cognome" v-model="cognome" />
      <input type="text" name="collegio" placeholder="Collegio di appartenenza" v-model="collegio" />
      <input type="email" name="email" placeholder="Email" v-model="email" />
      <input type="password" name="password" placeholder="Password" v-model="password" />
      <button @click="register">Registrati</button>
    </form>
  </div> -->

<div id="signup">
    <h1>Registrati</h1>
    <div class="signup-form">
      <form>
        <div class="input">
          <label for="nome">Nome</label>
          <input
                  type="text"
                  id="nome"
                  v-model="nome">
        </div>

        <div class="input">
          <label for="cognome">Cognome</label>
          <input
                  type="text"
                  id="cognome"
                  v-model="cognome">
        </div>

          <div class="input">
          <label for="collegio">Collegio di appartenenza</label>
          <input
                  type="text"
                  id="collegio"
                  v-model="collegio">
        </div>

        <div class="input">
          <label for="email">E-mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        
        <!-- <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accetto i termini d'uso</label>
        </div> -->
        <div class="submit">
          <button @click="register" type="submit">Registrati</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Authservices from "@/services/Authservices";

export default {
  name: "Register",

  data() {
    return {
      nome: "",
      cognome: "",
      collegio: "",
      email: "",
      password: "",
      terms: false,
    };
  },

  methods: {
    async register () {
      const response = await Authservices.register({
        nome: this.nome,
        cognome: this.cognome,
        collegio: this.collegio,
        email: this.email,
        password: this.password
      })        
      console.log(response.data);
    },
  },
};
</script>

<style scoped>

h1 {
  text-align: center;
}
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
  }

label {
    font-size: 15px;
  }


.input.inline label {
  display: inline;
  
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.submit {
  text-align: center;
  margin-top: 2rem;
}

.submit button {
 
  padding: 15px 20px;
  background-color: #fa923f;
  color: white;
  border: none;
  font-family: 'Maven Pro', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  
}

.submit button:hover,
.submit button:active {
  background-color: #c97532;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>