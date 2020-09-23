<template>
  <div class="container_home">

    <div class="header-container">
      <div class="title">
        <h1 class="title-primary">
          <span class="title-main">bivacco</span>          
          <span class="title-sub">Condividere per prevenire</span>
        </h1>   
      </div><!-- End Title -->
    </div><!-- End header-container -->
    

    <section class="primary">
      <div class="primary-container">
        <p class="main-text">Bivacco.org nasce da una semplice constatazione a cui sono arrivato nel mio lavoro di Guida Alpina: spesso, alla base di un gran numero di incidenti in montagna (per quanto ogni evento sia diverso dall'altro), vi sono una serie di errori "ricorrenti".<br><br>
        Mentre in molti Paesi Europei (Francia, Svizzera, Austria) esistono strumenti di "condivisione" sulle dinamiche che hanno portato all'originarsi di tali incidenti, in un'ottica di prevenzione, in Italia non esiste niente di tutto ciò.
        L'obiettivo è quindi quello di creare un database dove si possano condividere informazioni utili a tutti gli amanti degli sport di montagna, per diffondere tale conoscenza e migliorare la sicurezza in tal senso.<br><br>
        Ricordiamoci comunque che il rischio "0" in montagna non esiste e che ogni situazione va valutata singolarmente e inquadrate nelle sue circostanze particolari.</p>
      </div><!-- End primary container -->
    </section><!-- End section primary -->
  </div>
</template>

<script>
export default {
  name: "home",
};

</script>

<style scoped>



.header-container {
  height: 100vh;
  background-image: url('../assets/header_img.png');
  background-size: cover;
  background-position: top;
  position: relative;
  background-repeat: no-repeat;
}

.title {
  position: absolute;
  top: 35%;
  left: 50%; 
  transform: translate(-50%, -50%);
  text-align: center;
}

.title-primary {
  color: #fff;
  font-family: 'Maven Pro', sans-serif;  
  backface-visibility: hidden;
}

.title-main {
  display: block;
  font-size: 58px;
  text-transform: uppercase;    
  letter-spacing: 22px;
  font-weight: 500;

  animation: moveInLeft 1s ease-in-out;
  
}

.title-sub {
  display: block;
  font-size: 42px;
  margin-top: 18px;
  letter-spacing: 6px;
  font-weight: 500;
  margin-bottom: 30px;

  animation: moveInRight 1s ease-out;
 
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.primary-container {
  max-width: 1200px;
  text-align: center;
  padding: 50px;
  margin: 0 auto;
}

p.main-text {
  font-family: 'Maven Pro', sans-serif;
  font-size: 19px;
  font-weight: 300;
  letter-spacing: 1.4px;
  line-height: 1.6;
  /* line-height: 1.3; */
}


</style>
