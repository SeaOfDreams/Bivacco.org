<template>
  <nav>
    <div class="nav-wrapper blue">
      
        <router-link to="/" class="brand-logo">Pro-Conditions</router-link>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/Dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/Register">Registrati</router-link>
          </li>
          <li>
            <router-link to="/signin">Login</router-link>
          </li>
        </ul>
     
    </div>
  </nav>
</template>

<style scoped>


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

/* li a {
  text-decoration: none;
  color: white;
} */

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}
</style> 