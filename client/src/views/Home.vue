<template>
  <div class="container_home">
    <div class="inner-container">
      <div class="title">

        <h1 class="title-primary">
          <span class="title-main">Bivacco.org</span>
          <span class="title-sub">Condividere per prevenire</span>
        </h1>
        
   
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "home",
};

</script>

<style scoped>

.title {
  position: absolute;
  top: 30%;
  left: 50%; 
  transform: translate(-50%, -50%);
}

.title-primary {
  color: #fff;
  font-family: 'Maven Pro', sans-serif;  
  text-align: center;
}

.title-main {
  display: block;
  font-size: 54px;
  text-transform: uppercase;  
  letter-spacing: 12px;
  font-weight: 500;
}

.title-sub {
  display: block;
  font-size: 32px;
  margin-top: 12px;
  letter-spacing: 6px;
  font-weight: 400;
}



.inner-container {
  height: 100vh;
  background-image: url('../assets/header_img.png');
  background-size: cover;
  background-position: top;
  position: relative;
}



</style>
