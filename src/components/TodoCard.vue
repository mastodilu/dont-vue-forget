<template>
  <div class="todo-card" @mouseover='showIcons=true' @mouseleave="showIcons=false">
    <div class="card blue-grey darken-1">
      <div v-if="showIcons">
        <i class="small material-icons delete"  @click=actionDelete >  delete </i>
        <i class="small material-icons edit"    @click=clicked  > edit    </i>
      </div>
      <div class="card-content white-text">
        <p>{{todo.content}}</p>
        <span class="lime-text">{{todo.createdAt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'TodoCard',
  data: function(){
    return {
      showIcons: false,
      // variables here
    }
  },
  props: ['todo'],
  methods: {
    clicked: function(){
      console.log('clicked')
    },
    actionDelete: function() {
      this.$emit('deleteTodo', {createdAt:this.todo.createdAt, id:this.todo.id})
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
</style>
