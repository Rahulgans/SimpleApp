


    <!-- Single File Component architecture , made possible by Vue-loader defined in webpack.config -->
    
<template>
  	<div class="formDiv">
  		<!-- <h3>{{ selection }}</h3> -->
      	<h1 style="margin: 1em 0em;text-shadow: 1px 2px darkgrey;">Signup</h1>
      
       	<form>
       		<div class="info">
	        	<label for="option1"><b>Fullname</b></label><br>
	          	<input type="text" v-model="form.fullName" id="option1" required><br>
          	</div>
          	<div class="info">
	        	<label for="option2"><b>Email</b><span class="helper">This will be your username</span></label><br>
	          	<input type="email" v-model="form.email" id="option2" required><br>
          	</div>
          	<div class="info">
	          	<label for="option3"><b>Password</b></label><br>
	          	<input type="password" v-model="form.password" id="option3" required><br>
          	</div>
        	<button class="submitBtn" type="submit" v-on:click="submitForm()">Submit</button>
    	</form>

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

	display: flex;
	flex-direction: column;
	align-items: center;
    margin: 0em 5em;
    box-shadow: 1px 1px 3px grey;
    background-color: white;
}

	/*Media queries to achieve responsiveness*/
@media screen and (max-width: 768px){

	.formDiv{
		margin: 0em 1em;
	}
}

	/* Div which has form fields*/
.info{
	
	display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.info input{

	padding: 0.3em;
    border-radius: 1em;
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

  padding: 1em 4em;
  margin: 2em 0em;
  background-color: #5de44b;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 600;
}

	/*alert message div*/
.alertMessage{
	border: 2px solid #62ce32;
	border-radius: 10px;
	margin: 1em 0em;
	padding: 1em;

}
</style>
