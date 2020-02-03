<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems: []
    }
  },
  created(){
    // 할일목록(저장된)이 존재할때
    if(localStorage.length > 0){
      for(var i = 0; i < localStorage.length; i++){
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    // 할일 추가
    addTodo(todoItem){
      // 로컬스토리지에 데이터 추가
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    // 할일 삭제
    removeTodo(todoItem, index){ 
      // splice 특정인덱스에 부여한 숫자만큼의 인덱스를 삭제 
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    // 할일 전체 삭제
    clearAll(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f8;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>