<template>
  <div class="todo-card" @mouseover='showIcons=true' @mouseleave="showIcons=false">
    <div class="card blue-grey darken-1">
      <div v-if="showIcons">
        <i class="small material-icons delete" @click=actionDelete > delete </i>
        <i class="small material-icons edit" @click='displayEditField = !displayEditField' > edit </i>
      </div>
      <div class="card-content white-text">
        <p>{{todo.content}}</p>
        <div v-if='displayEditField' class='nested-edit'>
          <div>
            <textarea class="materialize-textarea white-text"
              v-model=userInput
              v-on:keydown.enter.exact.prevent
              v-on:keyup.enter.exact=updateTodo>
            </textarea>
          </div>
          <div class="icon-wrapper">
            <i class="material-icons" @click=updateTodo >sync</i>
          </div>
        </div>
        <span class="lime-text">{{todo.createdAt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default{
  name: 'TodoCard',
  data: function(){
    return {
      showIcons: false,
      displayEditField: false,
      userInput: '',
    }
  },
  props: ['todo'],
  methods: {
    actionDelete: function() {
      this.$emit('deleteTodo', this.todo.id)
    },
    updateTodo: function() {
      if(this.userInput !== '') {
        let newTodo = this.todo
        newTodo.content = this.userInput
        db.collection('todos').doc(firebase.auth().currentUser.email).collection('myTodos').doc(this.todo.id).update(newTodo)
        .catch(err => {console.log(err)})
        
        this.displayEditField = false
        this.userInput = ''
      }
    }
  }
}
</script>

<style>
.todo-card .card-content p {
  margin-bottom: 6px;
}

.todo-card i {
  cursor: pointer;
}

.todo-card i.delete {
  position: absolute;
  top: 4px;
  right: 4px;
  color: tomato;
}

.todo-card i.edit {
  position: absolute;
  bottom: 4px;
  right: 4px;
  color: orange;
}

.card .card-content {
  padding-right: 32px;
}

.todo-card .nested-edit {
  display: grid;
  grid-template-columns: auto 2rem;
 background: rgba(255, 255, 255, 0.05);
}

.todo-card .nested-edit .icon-wrapper {
  justify-self: end;
  align-self: center;
}

.todo-card .nested-edit textarea {
  padding-left: 0.7rem;
}

.todo-card .card-content p {
    font-size: 1.2rem;
}
</style>
