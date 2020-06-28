<template>
  <div id="login">
    <form @submit.prevent=submitForm>
      <label for="email">Email:</label> <input type="text" id="email" name="email" v-model="email" required>
      <label for="password">Password:</label> <input type="password" id="password" name="password" v-model="password" required>
      <p class="alert">{{feedback}}</p>
      <input type="submit" value="Submit">
    </form>
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
      feedback = ""
      if(!email || email === '' || !password || password === ''){
        feedback = "you need to complete each field"
      }

      feedback = "it's working"
    },
  }
}
</script>

<style scoped>
  .alert {
    color: red;
  }
</style>