<template>
   <div class="container">
      <form v-if="!isSubmitted">
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <h1>Input Data</h1>
               <hr>
               <app-full-name v-model="fullName" ></app-full-name>
               <!-- <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" class="form-control" v-model="firstName">
               </div>
               <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" class="form-control" v-model="lastName">
               </div> -->
               <div class="form-group">
                  <label for="email">Email</label>
                  <input type="text" id="email" class="form-control" v-model="email">
               </div>
               <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" class="form-control" v-model="password">
               </div>
               <!-- Exercise 1 -->
               <!-- Create a Signup Form where you retrieve the following Information -->
               <!-- Full Name (First Name + Last Name) -->
               <!-- Mail -->
               <!-- Password -->
               <!-- Store Data? Yes/No -->

               <!-- Exercise 2 -->
               <!-- Only display the Form if it has NOT been submitted -->
               <!-- Display the Data Summary ONCE the Form HAS been submitted -->

               <!-- Exercise 3 -->
               <!-- Edit the Example from above and create a custom "Full Name" Control -->
               <!-- which still holds the First Name and Last Name Input Field -->
            </div>
         </div>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
               <label for="storeData">Store in database?</label>
               <br>
               <label for="yes">
                  <input type="radio" id="yes" value="Yes" v-model="storeData"> Yes
               </label>
               <label for="no">
                  <input type="radio" id="no" value="No" v-model="storeData"> No
               </label>
            </div>
         </div>
         <hr>
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <button class="btn btn-primary" type="submit" @click.prevent="isSubmitted = true">Submit!</button>
            </div>
         </div>
      </form>
      <hr>
      <div class="row" v-if="isSubmitted">
         <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="panel panel-default">
               <div class="panel-heading">
                  <h4>Your Data</h4>
               </div>
               <div class="panel-body">
                  <p>Full Name: {{fullName}}</p>
                  <p>Mail: {{ email }}</p>
                  <p>Password: {{ password }}</p>
                  <p>Store in Database?: {{ storeData }}</p>
               </div>
            </div>
         </div>
      </div>
      <button @click="logName">console.log(fullName)</button>
   </div>
   
</template>

<script>
   import FullName from './FullName.vue'
   export default {
      data() {
         return {
            fullName: 'Krešimr Sudar',
            email: '',
            password: '',

            storeData: 'Yes',
            isSubmitted: false
         }
      },
      methods: {
         logName(){
            console.log(this.fullName);
            
         }
      },
      components: {
         appFullName: FullName
      }
   }
</script>

<style>
</style>
