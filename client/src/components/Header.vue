<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item class="nav-item" tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item class="nav-item" tag="router-link" :to="{ path: '/dashboard' }">Incidenti</b-navbar-item>
      
    </template>

    <template slot="end">
      
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary"  tag="router-link" :to="{ path: '/register' }">
            <strong>Registrati</strong>
          </a>
          <a class="button is-light" tag="router-link" :to="{ path: '/signin' }">Log in</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style>
.navbar {
  padding: 20px 0px;
  margin-bottom: 20px;
  font-family: 'Maven Pro', sans-serif;;
  max-width: 1100px;
  margin: 0 auto;
}

.start {
  margin-left: 10px;
}

a.button.is-primary {
  background-color: #F26522;
}

a.button.is-primary:hover {
  background-color: #Fda942;
}

.navbar-item.nav-item.router-link-exact-active {
  color: #F26522;
}

.navbar-item.nav-item:hover {
  color: #F26522;
}



</style> 