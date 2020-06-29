<template>
  <div class="home">
    <CreateTodo label="Don't forget to..." @newtodo=createTodo />
    <div class="cards-container">
      <div v-for="(todo, index) in allTodos" :key=index>
        <TodoCard :todo='todo' @deleteTodo=deleteTodo />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoCard from '@/components/TodoCard.vue'
import CreateTodo from '@/components/CreateTodo.vue'
import db from '@/firebase/init.js'
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    TodoCard,
    CreateTodo,
  },
  data: function(){
    return {
      allTodos: [],
    }
  },
  methods: {
    createTodo: function(payload){
      console.log("todo: upload",payload)
      db.collection('todos').add(payload)
        .then(
          this.allTodos.unshift(payload)
        )
        .catch(err => {console.log(err)})
    },

    deleteTodo: function(payload){
      console.log("delete", payload)
      db.collection('todos').doc(payload.id).delete()
        .then(() => {
          // delete item in local
          this.allTodos = this.allTodos.filter(todo => {
            return todo.createdAt !== payload.createdAt
          })
        })
        .catch(err => {
          console.log(err)
        })
      
    },
  },
  created: function(){
    console.log(firebase.auth().currentUser.email)
    db.collection('todos').doc(firebase.auth().currentUser.email).collection('myTodos').orderBy('createdAt', 'desc').get()
    .then(snapshot => {
      snapshot.forEach(currentDocument => {
        console.log(currentDocument)
        let todo = currentDocument.data()
        todo.id = currentDocument.id
        this.allTodos.push(todo)
      });
    })
    .catch(err => {console.log(err)})
  }
}
</script>

<style>

.home {
  padding: 1rem;
}

.home .cards-container{
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(19rem, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1px 20px;
  /* margin-top: 30px; */
}

</style>