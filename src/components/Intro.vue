
    <!-- Single File Component architecture , made possible by Vue-loader defined in webpack.config -->

<template>
  <div class="introDiv">
      <h1>{{ msg }}</h1>
      <div class="main-content">
        <p class="intro-text">You are with the most preferred business network to buy, sell, fund and grow.</p>
        <form>
           <!-- using V-MODEL for data-binding -->
            <label for="option1">
              <input type="radio" v-model="intro" id="option1" value="individual" class="intro-radio">I am an individual</label><br>
            <label for="option2">
              <input type="radio" v-model="intro" id="option2" value="business" class="intro-radio">I own a business</label>
        </form>
        <button class="submitBtn" v-on:click="goTo()">Continue</button>
      </div>
      <!-- </div> -->
  </div>
</template>

<script>

import router from '../router'

export default {
  name: 'Intro',
  data () {
    return {

      // Just for example
      msg: 'Welcome',

      // value for radio button
      intro:''
    }
  },
  methods:{
    goTo(){
      console.log(this.intro);
        router.push({name:'signup', params:{selection:this.intro}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.introDiv{

  margin:0% 20% ; 
  width: 60%;
}


.intro-text{

  text-align: left;

}


.main-content{

  display: flex;
  flex-direction: column;    
  align-items: flex-start;
  padding: 15%;
  background-color: white;

}


.submitBtn{

  padding: 0.5em 5em;
  margin: 1.5em 0em;
  background-color: #2376ec;
  border-radius: 5px;
  font-size: 1em;
  color: white;
  
}

.intro-radio{
  margin-top: -1px;
  vertical-align: middle;
  border: 3px solid lightblue;
}

.intro-radio:focus{

  border-color: blue;
}

label{
    display: inline-block;
    padding: 1em 0em;
}

@media screen and (max-width: 480px){

  .introDiv{

    margin: 0% 5%;
    width: 90%;
  }

  .main-content{
    padding: 5%;
  }

  .submitBtn{

    font-size: 0.9em;
  }
}

</style>
