<template>
  <div class="create-todo">
    <div class="input-field">
      <textarea id='newTodoText' class="materialize-textarea"
        v-model=userInput
        v-on:keydown.enter.exact.prevent
        v-on:keyup.enter.exact=createTodo>
      </textarea>
      <label for=newTodoText>{{label}}</label>
    </div>
    <button class="btn-floating" @click=createTodo ><i class="material-icons">cloud_upload</i></button>
  </div>
</template>

<script>
import moment from 'moment'
import { dateFormat } from '../globals/variables.js'
export default {
  name: 'CreateTodo',
  data: function(){
    return {
        userInput: '',
      }
  },
  methods: {
    createTodo: function(){
      if(!this.userInput || this.userInput === '') {
        return
      }
      let now = moment(Date.now()).format(dateFormat)
      let newitem = {
        content: this.userInput,
        createdAt: now,
      }
      this.$emit('newtodo', newitem)
      this.userInput = ''
    },
  },
  props: ['label'],
}
</script>

<style>
.create-todo {
  display: grid;
  grid-template-columns: auto 3rem;
  column-gap: 10px;
}

.create-todo button {
  justify-self: center;
  align-self: center;
}

.create-todo {
  padding-left: 8px;;
}

.create-todo button {
  align-self: start;
  margin-top: 1rem;
}
</style>