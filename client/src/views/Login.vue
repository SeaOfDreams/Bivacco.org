<template>
  <div class="outer-container">
    <div class="container-form-login">
      <form class="signin-form" action="">
        <b-field label="Email">
          <b-input
            type="email"
            maxlength="30"
            placeholder="Inserisci la tua email"
            v-model="email"
          >
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            v-model="password"
            placeholder="Min 6 - Max 30 caratteri"
            password-reveal
          >
          </b-input>
        </b-field>

        <div class="row">
          <button @click="login" type="submit" class="btn add-incidente">
            Login
          </button>
        </div>

        <div class="already_registered">
          <h4>
            Non sei registrato?
            <router-link to="/register">Registrati</router-link> ora
          </h4>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import firebase from "firebase";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
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
  margin-top: 120px;
}

.row {
  text-align: center;
}

h1 {
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
  background-color: #fda942;
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
}
</style>