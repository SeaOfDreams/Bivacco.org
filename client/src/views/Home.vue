<template>
  <div class="container_home">
    <div class="header-container">
      <div class="title">

        <h1 class="title-primary">
          <span class="title-main">bivacco</span>          
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



.header-container {
  height: 100vh;
  background-image: url('../assets/header_img.png');
  background-size: cover;
  background-position: top;
  position: relative;
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


</style>
