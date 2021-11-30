<template>
  <div>
      <ul>
          <Todoitem v-for="todo in todos"
            v-bind:key = "todo.title" 
            :todo="todo"
            @todo-item-changed="Changed"
             />
        
      </ul>
  </div>
</template>

<script>
import Todoitem from './Todoitem.vue'
export default {
    props:['todos'],
    components: {Todoitem},
    methods:{
        Changed(e){
            this.$emit('todo-item-changed', e)
        }
    }

}
</script>

