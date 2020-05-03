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
export default {
  name: 'CreateTodo',
  data: function(){
    return {
        userInput: '',
      }
  },
  methods: {
    createTodo: function(){
      
      if (this.userInput !== '') {
          let newitem = {
          id: '1234',
          content: this.userInput,
          createdAt: '20200502_175743',
        }
        this.$emit('newtodo', newitem)
        this.userInput = ''
      }
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
</style>