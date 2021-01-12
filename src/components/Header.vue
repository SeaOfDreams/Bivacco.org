<template>

  <b-navbar fixed-top >
    
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
                     
          <img
            class="logo"
            src="../assets/bivacco-org.svg"
            alt="bivacco.org"
          />
        </b-navbar-item>
      </template>
      

      <template slot="end">
        <b-navbar-item class="nav-item" tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item class="nav-item" tag="router-link" :to="{ path: '/dashboard' }">Incidenti</b-navbar-item>
        
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link class="button is-primary" v-if="!isLoggedIn" :to="{ path: '/register' }">Register</router-link>
            <router-link class="button is-light" v-if="!isLoggedIn" :to="{ path: '/signin' }">Log in</router-link>
            <button class="button is-primary" v-if="isLoggedIn" @click="logout" >Log out</button>
          </div>
        </b-navbar-item>
     </template>
    
  </b-navbar>
  
</template>

<script>
/* eslint-disable no-unused-vars */
import firebase from 'firebase'

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false

    }
  },
  created() {
    if(firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/');
      })
    }
  }
};

</script>

<style>

.navbar-end {
  margin-right: 50px;
}

img.logo {
  margin-left: 50px;
}

@media (min-width: 320px) and (max-width: 480px) {
  
  img.logo {
  margin-left: 5px;
}
}

@media (min-width: 768px) and (max-width: 1024px) {
  
  img.logo {
  margin-left: 10px;
}
  
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