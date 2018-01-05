
    <!-- Single File Component architecture , made possible by Vue-loader defined in webpack.config -->

<template>
  <div>
      <h1>{{ msg }}</h1>
      <div class="main-content">
        <p style="font-size: 1.5em;">You are with the most preferred business network to buy, sell, fund and grow.</p>
        <form>
           <!-- using V-MODEL for data-binding -->
            <label for="option1">
              <input type="radio" v-model="intro" id="option1" value="individual"><b>I am an individual</b></label><br>
            <label for="option2">
              <input type="radio" v-model="intro" id="option2" value="business"><b>I own a business</b></label><br>
            <button class="submitBtn" v-on:click="goTo()">Continue</button>
        </form>
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
      router.push({name:'signup', params:{selection:this.intro}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-content{

  display: flex;
  flex-direction: column;    
  align-items: center;
  background-color: white;

}

.submitBtn{

  padding: 0.5em 5em;
  margin: 2em 0em;
  background-color: skyblue;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 600;
}

input[type="radio"] {
  margin-top: -1px;
  vertical-align: middle;
}

label{
    display: inline-block;
    padding: 1em;
}

</style>
