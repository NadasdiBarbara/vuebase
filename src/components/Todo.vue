<template>
  <div>
      <ul>
          <Todoitem v-for="todo in todos"
            v-bind:key = "todo.title" 
            :title="todo.title" />
        
      </ul>
  </div>
</template>

<script>
import Todoitem from './Todoitem.vue'
export default {
    props:['todos'],
    components: {Todoitem}

}
</script>

