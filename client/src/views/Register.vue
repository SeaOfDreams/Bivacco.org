<template>
  <div class="outer-container">
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

        <b-field label="Nickname">
          <b-input
            v-model="nickname"
            placeholder="Scegli il tuo nickname"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Password">
          <b-input v-model="password" type="password" placeholder="Scegli una password tra i 6 e i 30 caratteri" password-reveal>
          </b-input>
        </b-field>

        <div class="row">
          <button @click="register" type="submit" class="btn add-incidente">
            Registrati
          </button>
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
      nickname: "",
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

.submit button {
  padding: 15px 20px;
  background-color: #fa923f;
  color: white;
  border: none;
  font-family: "Maven Pro", sans-serif;
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