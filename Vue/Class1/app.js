new Vue({ //criando uma instancia do vue
  el:'#app', //qual o elemento que controlamos a partir da instancia do vue
  data:{ // obj que definimos dados usados no template controlado pelo vue. No html oq tiver entre {{}} será interpolado pelo framework
    titulo:"usado vue.js"
  },
  methods:{ // metodos de eventos gerados pelo html
    alterarTitulo (event){ //metodo invocado direto no elemento do html
      this.titulo = event.target.value// para acessar dentro da instancia do vue temos que usar o this
    }
  }
})