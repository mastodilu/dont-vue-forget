<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper blue-grey darken-2">
        <router-link :to='{name:"Home"}' class="brand-logo left"><span>Don't Forget</span></router-link>
        <ul class="right">
          <li><button @click=logoutUser class="waves-effect btn-flat">Logout</button></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  data: function(){
    return {}
  },
  methods: {
    logoutUser: function(){
      firebase.auth().signOut()
      .then(this.$router.push({name:'Login'}))
      .catch(err => {alert(err)})
    }
  },
}
</script>

<style>
.navbar .nav-wrapper{
  padding-left: 10px;
  padding-right: 10px;
}

.navbar .logout-icon {
  background: url("/dist/logout.ico");
}

.navbar ul.right button {
  color: white;
  background: rgba(0, 0, 0, 0.15);
}
</style>