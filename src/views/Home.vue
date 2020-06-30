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
      unsubscribe: null,
    }
  },
  methods: {
    createTodo: function(payload){
      console.log("todo: upload",payload)
      db.collection('todos').doc(firebase.auth().currentUser.email).collection('myTodos').add(payload)
      .catch(err => {console.log(err)})
    },

    deleteTodo: function(id){
      console.log("delete", id)
      db.collection('todos').doc(firebase.auth().currentUser.email).collection('myTodos').doc(id).delete()
      .catch(err => {
        console.log(err)
      })
    },
  },
  created: function(){
    console.log('listening for changes')
    let collection = db.collection('todos').doc(firebase.auth().currentUser.email).collection('myTodos').orderBy('createdAt', 'desc')
    this.unsubscribe = collection.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let doc = change.doc
        let data = doc.data()
        console.log('>', change.type, doc.id, data)
        switch(change.type){
          case 'removed':
            this.allTodos = this.allTodos.filter(todo => {
              todo.id !== doc.id
            })
            break
          case 'added':
            data.id = doc.id
            this.allTodos.unshift(data)
            break
          case 'modified':
            this.allTodos.forEach(todo => {
              if(todo.id === doc.id) {
                // FIXME break this loop when this IF is triggered
                todo.content = data.content
                console.log('updating', doc.id)
              }
            })
            break
        }
      })
    })
  },
  beforeDestroy: function(){
    this.unsubscribe()
    console.log('unsubscribed')
  },
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
}

</style>