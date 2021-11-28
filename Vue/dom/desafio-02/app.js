new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibeAlerta (){
            alert("ALERTA DE CLICK")
        },
        armazenaValor(event) {
            this.valor= event.target.value;
        },
    }
})