var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    // #할일 1 
    quiz1: 'Hello ITKOO!',
    // #할일 2
    uid: 20,
    // #할일 4
    flag: true,
    // flag: false
    
  },
  methods: {
    // #할일 3
    clickBtn: function(){
      alert("click! click!");
    },
    quiz3: function(){
      console.log("클릭 이벤트!");
    }
  }
});