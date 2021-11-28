new Vue ({
  el:"#desafio",
  data:{
    nome:"Bruno",
    idade: 30,
    imgLink:"https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  methods:{
    nAleatorio (){
      return Math.random()
    }    
  }
})
