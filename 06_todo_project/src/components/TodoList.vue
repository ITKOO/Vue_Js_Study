<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in propsdata" 
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
  // App.vue todoItems
  props: ['propsdata'],
  methods:{
    // 할일 삭제 
    removeTodo(todoItem, index){
      this.$emit('removeTodo', todoItem, index);
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