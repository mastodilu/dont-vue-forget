<template>
  <div id="login">
    <div class="container blue-grey darken-2">
      <!-- <form @submit.prevent=submitForm v-on:keyup.enter.prevent=submitForm> -->
      <form @submit.prevent=submitForm>
        <input type="text" id="email" name="email" v-model="email" placeholder="email" required>
        <input type="password" id="password" placeholder="password" name="password" v-model="password" required>
        <p class="alert">{{feedback}}</p>
        <button class="btn" type="submit">login</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data: function(){
    return {
      email: '',
      password: '',
      feedback: '',
    }
  },
  methods:{
    setFeedback: function(msg){
      if(!msg) {
        return
      }
      this.feedback = msg
    },
    
    submitForm: function(){
      this.feedback = ""
      if(!this.email || this.email === '' || !this.password || this.password === ''){
        this.password = ''
        this.feedback = "you need to complete each field"
      }

      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push({name: 'Home'})
      })
      .catch(err => this.feedback = err.message)
    },
  }
}
</script>

<style scoped>
  .alert {
    color: #ff9292;
  }

  .container {
    display: grid;
    margin-top: 25vh;
    max-width: 500px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 1rem;
  }

  input[type=text], input[type=password] {
    color: white;
    border-radius: 3px;
  }

  button{
    width: 100%;
  }
</style>