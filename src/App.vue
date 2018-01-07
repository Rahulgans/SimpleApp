
      <!-- This is our root component -->

<template>
  <div id="app">

    <!-- The router uses this placeholder for rendering other components -->
    <router-view></router-view>
    <div class="footer">
      
      <a href="#">Terms&Policy</a>
      <a href="https://www.indiabizforsale.com/" target="blank">&copy;IndiaBizForSale</a>
      <a href="#">Contact</a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer{

      display: flex;
      flex-direction: row;
      width: 60%;
      margin: 1% 20%;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      padding: 5px;
      margin-top: 1em;
      font-size: 0.8em;
}

.footer a{
  text-decoration: none;
  /*color: black;*/
}

@media screen and (max-width: 480px){

  .footer {
    flex-direction: column;
  }

  .footer a{

    padding: 0.5em;
  }
}

</style>
