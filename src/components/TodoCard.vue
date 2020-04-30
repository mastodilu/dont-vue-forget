<template>
  <div class="todo-card">
    <div class="card blue-grey darken-1">
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
    // variables here
  },
  props: ['todo'],
}
</script>

<style>
.todo-card .card-content p {
  margin-bottom: 6px;
}
</style>
