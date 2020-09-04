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
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/dashboard' }">Incidenti</b-navbar-item>
      
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
  padding: 20px 50px;
  margin-bottom: 20px;
  font-family: 'Maven Pro', sans-serif;;
}

.start {
  margin-left: 10px;
}
/* .brand-logo {
  margin-left: 2rem;
} 

nav.navbar {
  background-color: #521751;
  height: 56px;
  padding: 0 20px;
  font-family: 'Maven Pro', sans-serif;
  
}

a.nav_link {
  color: white;
  font-size: 17px;
} */

/* .nav_link:hover,
.nav_link:active,
.nav-link.link-router-active {
  background-color: #521751;
  color: #fa923f;
} */

/* a.button.is-primary {
  background-color: #fa923f;
  font-weight: 500;
   
}

.register_button {
  color: white;
  font-size: 16px;
}

.register_button:hover{
  color: white;  
}

a.button.is-primary:hover {
  background-color: #c97532;
}

a.signin_button {
  color: #4a4a4a;
  font-weight: 500;
}

a.button.is-light {
  background-color: white;    
}


.nav_link {
  font-size: 18px;
}


a:hover,
a:active,
a.router-link-active {
  color: #fa923f;
}

a.navbar-burger.burger {
  background-color: #fa923f;  
}

span.burger_span {
 color: white;
} */
</style> 