<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in todoItems" 
      v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{todoItem}}
        <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>   
    </ul>
  </section>
</template>

<script>
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
  methods:{
    // 할일 삭제 
    removeTodo(todoItem, index){
      localStorage.removeItem(todoItem);
      // splice 특정인덱스에 부여한 숫자만큼의 인덱스를 삭제 
      this.todoItems.splice(index, 1);
    }
  }
}
</script>

<style>
  ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn{
    margin-left: auto;
    color: #de4343;
  }

</style>