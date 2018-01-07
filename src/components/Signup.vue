


    <!-- Single File Component architecture , made possible by Vue-loader defined in webpack.config -->
    
<template>
  	<div class="formDiv">
  		<!-- <h3>{{ selection }}</h3> -->
  		<div class="signupForm">
	      	<h3 style="margin: 0.5em 0em;">Sign Up</h3>
	      	<p style="color: lightgrey; margin-top:0.5em;margin-bottom:1.5em;">Create an account to experience the features</p>
	      
	       	<form style="width: 100%;text-align: left;">
	       		<div class="info">
		        	<label for="option1"><b>Fullname</b></label><br>
		          	<input type="text" v-model="form.fullName" id="option1" required><br>
	          	</div>
	          	<div class="info">
		        	<label for="option2"><b>E-mail</b><span class="helper">(This will be your username)</span></label><br>
		          	<input type="email" v-model="form.email" id="option2" required><br>
	          	</div>
	          	<div class="info">
		          	<label for="option3"><b>Create a password</b></label><br>
		          	<input type="password" v-model="form.password" id="option3" required><br>
	          	</div>
	          	<p style="font-size: 0.8em;margin: 0.5em 0em;">By clicking on the button, you agree to our <a href="#" style="text-decoration: none;">terms & conditions.</a></p>
	        	<button class="submitBtn" type="submit" v-on:click="submitForm()">Sign Up</button>
	    	</form>
    	</div>

    	<!-- using v-if to conditionally show alert -->

    	<div class="alertMessage" v-if="alert">
    		<p> User signed up successfully </p>
    	</div>
    </div>
</template>

<script>

export default {
  name: 'Signup',
  props:['selection'],
  data () {

    return {
    	form :{
    		name:'',
    		email:'',
    		password:''

    	},

    	alert:false
     
    }
  },
  methods:{
  	submitForm(){
      console.log(this.form);
      this.alert = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.formDiv{

	margin: 0% 20%;
    width: 60%;
}

.signupForm{

	display: flex;
	flex-direction: column;
	align-items: flex-start;
    padding: 15%;
    box-shadow: 1px 1px 3px grey;
    background-color: white;
}

	/*Media queries to achieve responsiveness*/
@media screen and (max-width: 480px){

	.formDiv{

		width: 90%;
		margin: 0% 5%;
	}
}

	/* Div which has form fields*/
.info{
	
	display: flex;
	/*width: 100%;*/
    flex-direction: column;
    align-items: flex-start;
}

.info input{

	padding: 0.3em;
	width: 100%;
    /*border-radius: 1em;*/
}

.info input:focus{
	outline: none;
    box-shadow: 0px 0px 2px blue;
}

/*helper text for email*/
.helper{

	font-size: 0.8em;
	color: darkgrey;
	padding-left: 0.5em;
}

/*submit button*/

.submitBtn{

  padding: 0.5em 3em;
  margin: 2em 0em;
  background-color: #2376ec;
  font-size: 1em;
  font-weight: 600;
  border-radius: 5px;
  font-size: 1em;
  color: white;
}

	/*alert message div*/
.alertMessage{
	border: 2px solid #62ce32;
	border-radius: 10px;
	margin: 1em 0em;
	padding: 1em;

}
</style>
