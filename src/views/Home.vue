<template>
  <div class="home">
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
import db from '@/firebase/init.js'

export default {
  name: 'Home',
  components: {
    TodoCard
  },
  data: function(){
    return {
      allTodos: [
        // {createdAt: '2020/04/30 15:46:23', content: 'Amet mollit sit occaecat ea amet commodo consequat et aliqua adipisicing.'},
        // {createdAt: '2020/04/29 15:46:23', content: 'Elit nisi excepteur fugiat id.'},
        // {createdAt: '2020/04/28 15:46:23', content: 'Aute voluptate mollit excepteur id esse excepteur.'},
        // {createdAt: '2020/04/27 15:46:23', content: 'Fugiat ex officia dolore adipisicing.'},
        // {createdAt: '2020/04/26 15:46:23', content: 'Lorem occaecat ut adipisicing velit fugiat anim excepteur magna incididunt cillum consequat.'},
        // {createdAt: '2020/04/25 15:46:23', content: 'Ut aliquip fugiat esse aute elit est mollit labore elit magna.'},
        // {createdAt: '2020/04/24 15:46:23', content: 'Consequat consectetur adipisicing aliqua ullamco cupidatat Lorem duis eu deserunt.'},
        // {createdAt: '2020/04/23 15:46:23', content: 'Id voluptate irure voluptate nisi minim officia dolor laboris qui ut ea magna incididunt.'},
        // {createdAt: '2020/04/22 15:46:23', content: 'Aliqua consequat.'},
        // {createdAt: '2020/04/21 15:46:23', content: 'Incididunt et est voluptate duis aliqua in aliqua elit consequat ea exercitation fugiat qui velit.'},
        // {createdAt: '2020/04/20 15:46:23', content: 'Do anim enim sit pariatur reprehenderit aute est mollit qui et laborum consequat.'},
      ]
    }
  },
  methods: {
    deleteTodo: function(payload){
      console.log("delete", payload)
      this.allTodos = this.allTodos.filter(todo => {
        return todo.createdAt !== payload.createdAt
      })
    }
  },
  // hook
  created: function(){
    db.collection('todos').get()
    .then(snapshot => {
      snapshot.forEach(currentDocument => {
        // console.log(currentDocument.data(), currentDocument.id)
        this.allTodos.push(currentDocument.data())
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
  grid-gap: 1px 20px;
  margin-top: 30px;
}

</style>