<template>
  <nav>
    <div class="nav-wrapper">
      
        <router-link to="/" class="brand-logo">Pro-Conditions</router-link>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link class="nav_link" to="/" exact>Home</router-link>
          </li>
          <li>
            <router-link class="nav_link" to="/Dashboard">Incidenti</router-link>
          </li>
          <li>
            <router-link class="nav_link" to="/Register">Registrati</router-link>
          </li>
          <li>
            <router-link class="nav_link" to="/signin">Login</router-link>
          </li>
        </ul>
     
    </div>
  </nav>
</template>

<style>
.brand-logo {
  margin-left: 2rem;
} 

.nav-wrapper {
  background-color: #521751;
  height: 56px;
  padding: 0 20px;
  
}

 
/* #header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #521751;
  padding: 0 20px;
}

.logo {
  font-weight: bold;
  color: white;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}*/

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 1rem;
  
}

.nav_link {
  font-size: 18px;
}


li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}
</style> 