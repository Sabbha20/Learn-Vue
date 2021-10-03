new Vue({
  el : '#app',
  data : {
    inputText : '',
  },
  computed : {
    identicon : function() {
      return jdenticon.toSvg(this.inputText, 200);
    }
  },
  methods : {
    onInput : function(event){
     this.inputText = event.target.value;
      //console.log(event.target.value)
    }
  }
})