<template>
  <div id="signin">
      <h1>Login</h1>
    <div class="signin-form">
      <form>
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
        <div class="submit">
          <button type="submit">Invia</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",

    data () {
      return {
        email: '',
        password: ''
      }
    },
 /*    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
      }
    }*/
  } 
</script>

<style scoped>

h1 {
  text-align: center;
}

label {
    font-size: 15px;
  }
  .signin-form {
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