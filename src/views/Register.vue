<template>
  <div class="outer-container">
    <h3 class="header">Registrati per inserire un incidente</h3>
    <div class="container-form-login">
      
      <form class="signin-form" action="">
        <b-field label="Email">
          <b-input
            type="email"
            placeholder="Inserisci la tua email"
            maxlength="30"
            v-model="email"
          >
          </b-input>
        </b-field>

    

        <b-field label="Password">
          <b-input v-model="password" type="password" placeholder="Tra i 6 e i 30 caratteri" password-reveal>
          </b-input>
        </b-field>

        <div class="row">
          <button @click="register" type="submit" class="btn add-incidente">
            Registrati
          </button>
        </div>
        <div class="privacy">Cliccando sul pulsante dichiari di aver preso visione della <a href="https://www.iubenda.com/privacy-policy/61950109">Privacy Policy</a></div>
        <div class="already_registered">
          <h4>Sei già registrato? Vai al <router-link to="/signin">Login</router-link></h4>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import firebase from "firebase";

export default {
  name: "Register",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert("Account creato");
            this.$router.push("/dashboard");
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
  },
};

</script>

<style scoped>
.outer-container {
  padding-top: 50px;
}

.container-form-login {
  font-family: "Maven Pro", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,
h3.header {
  text-align: center;
  font-family: 'Maven Pro', sans-serif;
  font-size: 38px;
  color: #000; 
  margin-bottom: 25px;
  font-weight: 600;
  margin-top: 120px;
  
}

@media (min-width: 320px) and (max-width: 480px) {
  
h1,
h3.header {
  margin-top: 70px;
}
}

.row {
  text-align: center;
}


label {
  font-size: 15px;
}
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #d9d4d4;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}
@media (min-width: 320px) and (max-width: 480px) {
  
.signin-form {
  width: 90%;
}
}

@media (min-width: 768px) and (max-width: 1024px) {
  
  .signin-form {
  margin-bottom: 100px;
}
  
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.submit {
  text-align: center;
  margin-top: 2rem;
  
}

button:hover,
button:active {
  background-color: #Fda942;
  color: white;
  outline: none;
  border: none;
}



button[disabled],
button[disabled]:hover,
button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
  outline: none !important;
}

.privacy {
  text-align: center;
  font-size: 14px;
  margin-bottom: 30px;
  padding: 0 25px;
}

</style>