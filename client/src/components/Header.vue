<template>

  <b-navbar fixed-top >
    
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          
          <img
            class="logo"
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="bivacco.org"
          />
        </b-navbar-item>
      </template>
      

      <template slot="end">
        <b-navbar-item class="nav-item" tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item class="nav-item" tag="router-link" :to="{ path: '/dashboard' }">Incidenti</b-navbar-item>
        
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

.navbar-end {
  margin-right: 50px;
}

img.logo {
  margin-left: 50px;
}

h1.title {
  font-size: 28px;
}

.navbar {
  padding: 20px 0px;  
  font-family: 'Maven Pro', sans-serif;
  
}

.start {
  margin-left: 20px;
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