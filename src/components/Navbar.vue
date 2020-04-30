<template>
  <div class="navbar">
    <nav>
      <div class="nav-wrapper blue-grey darken-2">
        <router-link :to='{name:"Home"}' class="brand-logo left"><span>Don't Forget</span></router-link>
        <ul class="right">
          <li><router-link :to='{name:"Home"}' class="btn-floating btn-large waves-effect waves-light teal halfway-fab"><i class="material-icons">add</i></router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data: function(){
    return {}
  },
  methods: {}
}
</script>

<style>
.navbar .nav-wrapper{
  padding-left: 10px;
  padding-right: 10px;
}
</style>