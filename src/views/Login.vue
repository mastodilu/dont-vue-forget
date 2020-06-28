<template>
  <div id="login">
    <div class="container blue-grey darken-2">
      <form @submit.prevent=submitForm v-on:keyup.enter.prevent="submit">
        <input type="text" id="email" name="email" v-model="email" placeholder="email" required>
        <input type="password" id="password" placeholder="password" name="password" v-model="password" required>
        <p class="alert">{{feedback}}</p>
        <button class="btn" type="submit">login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function(){
    return {
      email: '',
      password: '',
    }
  },
  methods:{ 
    submitForm: function(){
      this.feedback = ""
      if(!this.email || this.email === '' || !this.password || this.password === ''){
        this.password = ''
        this.feedback = "you need to complete each field"
      }

      this.feedback = "it's working"
      this.password = ''
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
    margin-top: 40%;
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