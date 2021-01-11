<template>
  <div class="container_home">
    <div class="header-container">
      <div class="title">
        <h1 class="title-primary">
          <span class="title-main">bivacco</span>
          <span class="title-sub">Condividere per prevenire</span>
        </h1>
      </div>
      <!-- End Title -->
    </div>
    <!-- End header-container -->

    <section class="primary">
      <div class="primary-container">
        <h1 class="primary-container-title">
          Condividere la
          <strong>
            <span class="article-span">tua esperienza</span>
          </strong> può salvare delle vite!
        </h1>
        <p class="main-text">
          Bivacco.org nasce da una semplice constatazione: spesso, alla base di un gran numero di incidenti in montagna (per quanto ogni evento sia diverso dall'altro), vi sono una serie di errori "ricorrenti".
          <br />
          <br />Mentre in molti Paesi Europei (Francia, Svizzera, Austria) esistono strumenti di "condivisione" sulle dinamiche che hanno portato all'originarsi di tali incidenti, in un'ottica di prevenzione, in Italia non esiste niente di tutto ciò.
          L'obiettivo è quindi quello di creare un database dove si possano condividere informazioni utili a tutti gli amanti degli sport di montagna, per diffondere tale conoscenza e migliorare la sicurezza in tal senso.
          <br />
          <br />Ricordiamoci comunque che il rischio "0" in montagna non esiste e che ogni situazione va valutata singolarmente e inquadrata nelle sue circostanze particolari.
        </p>
      </div>
      <!-- End primary container -->
    </section>
    <!-- End section primary -->

    <section class="secondary">
      <div class="secondary-container">
        <article>
          <div class="article-icon">
            <i data-vi="gem" data-vi-size="45" data-vi-primary="#F26522"></i>
          </div>
          <h3 class="article-title">
            La tua
            <strong>
              <span class="article-span">testimonianza</span>
            </strong> è preziosa
          </h3>
          <p class="article-text">
            Con il tuo contributo puoi evitare il verificarsi di nuovi incidenti, diffondendo
            conoscenza. Puoi decidere di rimanere nell'anonimato o meno.
          </p>
        </article>

        <article>
          <div class="article-icon">
            <i data-vi="user" data-vi-size="45" data-vi-primary="#F26522"></i>
          </div>
          <h3 class="article-title">
            <strong>
              <span class="article-span">Chi</span>
            </strong> può inserire
          </h3>
          <p class="article-text">
            L'inserimento può essere effetuato solamente da chi è stato coinvolto in prima persona o è stato testimone dell'incidente.
            Niente per "sentito dire" 👂
          </p>
        </article>

        <article>
          <div class="article-icon">
            <i data-vi="tag" data-vi-size="45" data-vi-primary="#F26522"></i>
          </div>
          <h3 class="article-title">
            <strong>
              <span class="article-span">Cosa</span>
            </strong> si può inserire
          </h3>
          <p class="article-text">
            Si possono inserire incidenti, ma anche "quasi incidenti". Spesso sono proprio le situazioni
            in cui si è "sfiorato" l'incidente quelle che insegnano di più.
          </p>
        </article>

        <article>
          <div class="article-icon">
          <i
            data-vi="shield"
            data-vi-size="45"
            data-vi-primary="#F26522"
          ></i>
          </div>
          <h3 class="article-title">
            Proteggiamo la
            <strong>
              <span class="article-span">privacy</span>
            </strong>
          </h3>
          <p
            class="article-text"
          >Evita di menzionare le persone coinvolte per nome e/o cognome (con il tuo puoi decidere liberamente cosa fare). Pensa che i loro famigliari potrebbero leggere il tuo report.</p>
        </article>
      </div>
      <!-- End secondary-container -->
    </section>
    <!-- End section secondary -->

    <section class="third-section">
      <div class="buttons">
        <router-link class="button is-primary vedi" :to="{ path: '/dashboard' }"><strong>Vedi incidenti -></strong></router-link>
        <h4>oppure</h4>
        <router-link class="button is-primary aggiunta" :to="{ path: '/add' }"><strong>Inserisci incidente -></strong></router-link>
      </div>
    </section>
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
  background-image: url("../assets/header2_img.jpg");
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
  font-family: "Maven Pro", sans-serif;
  backface-visibility: hidden;
}

.title-main {
  display: block;
  font-size: 68px;
  text-transform: uppercase;
  letter-spacing: 22px;
  font-weight: 700;

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
  /* font-family: 'Maven Pro', sans-serif; */
  font-size: 21px;
  color: #48434f;
  font-weight: 400;
  line-height: 1.6;
  /* line-height: 1.3; */
}

h1.primary-container-title {
  font-family: "Maven Pro", sans-serif;
  font-size: 40px;
  color: #000;
  margin-top: 30px;
  margin-bottom: 40px;
  font-weight: 700;
}

.article-span {
  color: #f26522;
}

.secondary {
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

.secondary-container {
  display: grid;

  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  row-gap: 30px;
  margin: 60px 25px;
  padding: 0 25px;
}

.article-title {
  font-size: 26px;
  color: #48434f;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2.5px;
  font-family: "Maven Pro", sans-serif;
}

.article-text {
  font-size: 18px;
  margin-top: 0.75rem;
  color: #48434f;
}

.third-section {
  margin-top: 20px;  
  padding-top: 50px;
  display: flex;
  justify-content: center;
  
}

.buttons {
  display: flex;
  flex-direction: column;   
}

a.button.is-primary.aggiunta {
  background-color: #7957D5;
  border: 1px solid #7957D5;
  font-size: 20px;
  padding: 26px 22px;
  margin-top: 10px;
}

a.button.is-primary.vedi {
  margin-right: 0;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 26px 22px;
  border: 1px solid #F26522;
}

a.button.is-primary.vedi:hover {
  background: #c44f18;
}

a.button.is-primary.aggiunta:hover {
  background: #5438a1;
}

.article-icon {
  transform: translateX(-8px);
}
</style>
