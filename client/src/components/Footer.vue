<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Bivacco.org</strong> by
        <a href="https://filippolivorno.com">Filippo Livorno</a>
        <br />
      </p>
      <div class="disclaimer">
        <p class="footer-disclaimer">
          <strong>Disclaimer:</strong> questo sito è stato ideato e realizzato come un'iniziativa personale dalla Guida Alpina Filippo Livorno e non ha scopo di lucro, bensì quello di diffondere maggiore conoscenza tra gli amanti della montagna e dei suoi sport, con il presupposto che la condivisione e la comprensione delle cause che sono all'origine di un incidente possano permettere ad altri appassionati di evitare il ripetersi di alcuni errori. Ricordiamoci però sempre che in montagna il rischio "0"
          non esiste ed ogni situazione va inquadrata nelle sue condizioni particolari.
        </p>
      </div>

      <div class="links">
      <a href="https://www.iubenda.com/privacy-policy/61950109">Privacy policy</a> - <a href="https://www.iubenda.com/privacy-policy/61950109/cookie-policy">Cookie policy</a> - Icons by <a href="https://webkul.github.io/vivid/docs.html">Vivid Icons</a>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  margin-top: 100px;
  padding-bottom: 20px;
}

@media (min-width: 320px) and (max-width: 480px) {
  
footer {
    padding: 1rem 1rem 6rem;
}
}


.disclaimer {
  max-width: 700px;
  margin: 0 auto;
}

p.footer-disclaimer {
  font-size: 14px;
}

.links {
    margin-top: 15px;
    font-size: 14px;
}
</style> 