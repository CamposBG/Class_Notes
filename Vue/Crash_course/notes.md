# Vue

Pode ser usado para criar stand alone salf contained widgets (e.g. um formulário,) ou sites inteiros 

Single page application --> all routing is done in the browser (by the Vue JS bundle) and not on the server.

## Single alone Widgets

instalar vue perlo CDN na pagina HTML

```html
<script src="https://unpkg.com/vue@3.0.2"></script>
<script src ="./app.js"></script> 
```

> Vue não usa `;`

No app.ja vamos escrever todo o código do vue.

Criar vue app : controle o site todo ou partes do site

Criamos o vue app atravez do método `Vue.createApp( )`

    escolhemos oq o app vai controlar atravez do método mount e colocando um selector 

```js
app.mount('#app')
```

Qualquer coisa acontecendo dentro do elemento com o `id="app"` vai ser controlado pelo vue app object. fazemos isso passando um objeto como parametro para nosso método createApp. Esse obj representa uma root component no vue  

```js
const app = Vue.createApp({
    //data, functions, templates for the component
    template: '<h2> I am the template </h2>'
})

app.mount('#app')
```

O H2 será montado dentro do elemento com id de app 

Posso criar o template direto no HTML e colocar dados dinamicos definidos pelo Vue

## Colocando uma variavel no template ou HTML

Data function dentro de uma componente posso criar variaveis para ser usada no meu template

```js
const app = Vue.createApp({
    data() {
        return{
            title:"the final empire",
        }
    }
})

app.mount('#app')
```

```html
<div id="app">
    <h1>{{ title }}</h1>
</div> 
```

### Update varaiable baseado em eventos

diretiva `v-on`  - reação a uma evendo depois escolhemos o tipo de evento `v-on:click="JsCode to rum"`  - SHORT HAND =  `@click="Js code"`

```html
<button v-on:click="age++"> increase age </button>
```

## Criando um método dentro da component

```js
const app = Vue.createApp({
    data() {
        return {
            //data
        }
    },
    methods: {
        changeTitle(){
            this.title = "new Title"
        }
    }
})

app.mount('#app')
```

Chamamos a função changeTitle no html da seguinte forma 

```html
<button v-on:click="changeTitle""> Change the title </button>
```

Note que nós referenciamos a função sem invocala diretamente (sem usar os parenteses), dessa forma o VUE app que vai invocar ela]

Se quiser posso passar algum parametro como argumento 

```html
<button v-on:click="changeTitle('novo titulo')""> Change the title </button>
```

```js
methods: {
    changeTitle(title){
        this.title = title
    }
}
```

### Conditional rendering

- `v-if = "  "`  - se oq dentro das aspas for verdade vai aparecer o conteudo dentro do elemento com v-if. 

- `v-else` - tem que ser colocado depois de um v-if

- `v-show = " "` -  Funciona similar ao` v-if `a diferença é que  se usamos o `v-if`ele remove totalmente o elemento da DOM . Já o `v-show `ele usa css para add ou remover` display="none"` ele esconde. 

> sempre que temos um evento temos acesso a um event object que podemos usar como parametro da função do evento ( primeiro argumento quando um evento ocorre)

```html
<div class="box" @mouseover="handleEvent($event, 5)"> mouse over (enter) </div>
```

```js
methods: {
    handleEvent(e, data ) {
        console.log(e, e.type)
        if (data) {
            console.log(data)
        }
    }
}
```

### f- for

passar por um grupo de dados (ex. itera sobre uma lista de objetos )

- `v-for="item in books" `- item é o nome que vai cada coisa vai receber e books é o array

## Attribute biding v-bind

ligar um valor, data, variavel a um atributo de html 

```html
<a v-bind:href="url"> best site </a>
<a :href="url"> best site </a>
```

no caso url é  uma variavel de um dado instancionado e crido dentro do vue app data function 

## computed properties

forma de definir data properties  dependente de outros dados normalmente no data funcion. Sempre que os dados mudarem a propriedade atualiza 

## Full website with vue

É necessario usar o vue CLI para criar sites inteiros com vue

1. instalar o vue CLI, pré requisito nodeJS

2. usamos npm para instalar o vue cli e instalamos globally 

3. ```bash
   npm install -g @vue/cli
   ```

4. Dentro da pasta que vc quer criar o projeto

5. ```bash
   vue create project-name
   ```

6. depois disso e de selecionar algumas opções ele vai criar a pasta do projeto com as coisas basicas já 

7. vá a pasta criada e abra o vs code

### Project files

- node_modules  - dependencias para esse projeto

- public - index.html mandada para o browser inicialmente, é onde o vue vai injetar componentes

- src - escrevemos todos os codigos fontes, templates, componentes, css.  o arquivo `main.js `é o arquivo que vai startar a aplicação  e faz isso usando o createApp( ) method

dentro do main.js temos 

```js
import (createApp) from 'vue'
import App from './App.vue' // importando una component para ser usda no metodo createApp( )

createApp(App).mount('#app') // estamos pegando essa função a partir do primeiro import dentro da biblioreca do vue
```

App.vue é uma vue file que são single file components no vue. 

Essa App.vue  tem:

- Template

- script
  
  - component object sendo exportado

- style

no package.jason em o scrip para rodar o modo de desenvolvimento 

```bash
npm run serve
```

isso vai iniciar o local development server

## Vue files and Templates

### Templates

Criamos os templates de cada componente dentro de cada .vue file e nao mais diretamente no html file.

app.vue:

```js
<template>

    //root elements 
    <h1> {{ title }} <h1>

</template>


<script>

    //import some components 

    exports default {  //object que representa a root component, contem data, metdodos propriedades computadas, outras componentes  etc
        name: 'App',
        data(){
            return {
                title: 'My first vue app'
            }        
        }
    }

</script>


<style>
  #app {
    //global style
  }
h1{
   //something  
 }
</style>
```

#### Template refs

num caso normal usamos querySelector para selecionar algum elemento da DOM. no Vue usamos template refs para fazer isso. Possibilita armazenarmos uma referencia de um elemento da DOM em uma variavel, e usamos essa variavel para fazer as manipulaçãoes. 

no template add um ref 

```html
<input type-"text" ref="name">
<button @click="handleClick">Chick me</button>
```

```js
methods:{
    handleClick() {
        console.log(this..$refs.name) // todas as refs sao armazenadas dentro de @ref 
        this.$refs.name.classList.add('active') // depois que selecionado eu posso usar js normal para manipuçlar
        this.$refs.name.focus()
    }
}
```

## Multiple components (parent - child component - component tree)

- App.vue - root component, todas as outras componentes vão estar aninhadas a esta component  como por exemplo:
  
  - Header.vue
  
  - article.vue - que por dua vez podem ter outras components aninhadas
    
    - content.vue
    
    - comments.vue
  
  - footer.vue

###### Dentro da pasta component vc add as components

 vamos criar uma component para uma modal e chamar de Modal.vue para um pop up que aparecerá no site

```js
<template>
//... 
</template>
```

Dentro da nossa component root app.vue temos que importar a modal component 

1. primeiro importamos a modal.vue dentro do script 

```js
import Modal drom './components/Modal.vue' // nomear a components com letra maicula
```

2. Registrams que queremos usar a component model dentro do export default da parent component :

```js
export default {
    //...
     components: {Modal}
     data ()
        //...
    }
}
```

no template podemos usar Moral como um html tag qualquer e ele será importado

```js
<template>

    <Modal />
</template>
```

`<style scoped> </style>` - style só é aplicado a componente em que está e não mais globalmente.  ou sou mais especifico e uso `modal h1 {}` como selector. Se eu quiser estilos usados globamente eu posso criar  uma global style css doc em assets e usar esse css importando ele no main.js

### Passando valores de uma component pai para filho - PROPs

O ideal é data ser criada ou armazenada no parent component e de lá redistribuida. Uma fonte unica de dados. Para fazer isso vamos ver o exemplo da modal...

1. dentro da component pai vamos a component filho no template e passamos uma prop lá, por exemplo vamos parrar a prop header contendo uma string

2. ```js
   <template>
   
       <Modal header="Sigh up for the Giveaway" />
   
   </template>
   ```

3. No arquivo da model filho, dentro da script tag temos que falar ao vue que essa component deve aceitar alguma prop. Para isso dentro do script tag temos que colocar a component

4. ```js
   <template>
   
       <h1>{{ header }} // agora podemos usar header que vai receber o dado vindo da component pai onde é que ela seja usada
   
   </template>
   
   <script>
       export default{
           props: ['header']
       }
       data(){
           //...
       }
   
   </script> 
   ```

5. agora no arquivo da template filho:

6. 

## custon events

### event modifier

### slots - passa custom templates from parent into components child

### Teleport - tranportar algo do vue app para um lugar diferente da DOM

## Trabalhando com formulários

- Form nao precisa de action pq o JS vai cuidar disso

- 2-way data biding - `v-model="data-propertie-to-track"`  

- check-box - normammente boolean, se quisermos esclher um valor vamos ter que add um valuer prop no input tag

- v-for sempre tem que ter um key (identificador unico) para identificar cada elemento, pode ser o indice ou o proprio nome `:key=" "`

### Submetendo formulároio

- Sempre que tem um botão dentro de um formulario, por padrão ele submit o formulario e recarrega a pagina... queremos sobrescrever ese comportamento e fazer o vue cuidar disso
1. Add submit event no fomulario com um prevent (prevent default behaivior) `@submit.prevent="function-to-submit"`

```js
handleSumit(){
    // submit data to db or more simple stuff
    //validation password e joga erro se nao for correto

}
```

## Routing

Vue decide qual component carregar dependendo da rota que estamos (url)

### Setup

> precisamos do pacote vue router e na hora de criar o projeto tbm temos que selecionar que queremos as rotas

```bash
vue create project-name
```

1.Manual select features

2. choose verion

3. Babel

4. Router

2. Version 3

3. history mode for router (Y)

4. default config file

5. not save as preset

> o projeto já tem o vue-router packedge no fazendo assim
> 
> dentro de SRC folder tem a route folder

src > router > **index.js**

No arquivo Index.js  é onde configuramos todas as rotas.

Dentro desse arquivo temos um routes arrays com varios objetos representando uma rota

```js
import Home from "../views/Home.vue"

const routes = [
    {
        path:'/', // url relativo a root do site
        name: 'home' // nome para rota, para identificar ela 
        component: Home    // componente que será carregado quando o usuario enterar nessa rota, esse comp deve ser importado no inicio do doc
    },
]
```

a cima temos só um array com os dados das rotas,  mas elas ainda nçao foram implementadas e configuradas para isso temos o método createRouter()

```js
import { createRouter createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"

const routes = [
    {
        path:'/', // url relativo a root do site
        name: 'home' // nome para rota, para identificar ela 
        component: Home    // componente que será carregado quando o usuario enterar nessa rota, esse comp deve ser importado no inicio do doc
    },
    {
        // Add um novo objeto aqui para add uma nova rota
    }
]

//criamos a rota para o app
const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL) //use the web history api no browser para podermos clicar "foward", "back"" para navegar". Passamos o base url do nosso projeto
    routes // routes itself
})

//exportamos as rotas, que é usado no main.js 
export default router
```

em App.vue (componente pai principal, root component) nossos componentes podes injetar dinamicamente usando uma tag especial do vue no template `<router-view />`. Onde tiver essa tag a componente da rota será injetada dinamicamente dependendo da rota que visitamos

tudo fora do `<router-view />` vai aparecer em todos as paginas 

 em App.vue

```js
<template>

     <div id="nav">
        //nav bar
    </div>

    <router-view/> // os componentes de cada rota será renderizado aqui

    <div id="footer">
        //footer
    </div>

</template>
```

#### Router-link

no codigo acima na navbar em vez de usarmos <a> usamos <router-link> tags

```js
<template>

    <div id="nav">
        <router-link to="/">Home</router-lnk>
    </div>

    <router-view/> // os componentes de cada rota será renderizado aqui

    <div id="footer">
        //footer
    </div>

</template>
```

<router-link> tem o atributo to: 

- to - como se fosse o href, onde o link leva

Com o router-link o vue tem a capacidade de interceptar a request de ir para  rota e lidar com ela sem precisar passar pelo servidor de novo, tudo é feito no browser pelo vue. o router-link só muda as componentes. 

No router link podemos usar v-bind no atributo `to`

```js
<template>

    <div id="nav">
        <router-link :to="{ name: 'About'}">Home</router-lnk>
    </div>

    <router-view/> // os componentes de cada rota será renderizado aqui


</template>
```

No exemplo a cima estamos fazendo um bind fo to para o nome da rota definido no arquivo index.js onde foram definidas as rotas dentro de routes folder

### Lidando com route parameters on vue

normlamente route parameters é o `:id` (`: parameterName`) em `/jobs/:id` ( `/jobs/123`). No vue tratamos route parameters de outra forma

no arquivo das rotas index.js

```js
import { createRouter createWebHistory } from 'vue-router'
import JobDetails from "../views/JobDetails.vue"

const routes = [
    {
        path:'/jobs;:id',
        name: 'JobDetails',
        component:'JobDetails'
    }
]


const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL) 
    routes 
})

export default router
```

    

agora se na url digitarmos `/jobs/1` queremos que a componente JobDetails moste detalhes do job 1. para isso na component JobDetails temos que usar o router object

no component JobDetails:

```js
<template>
    <p> The job id is {{$route.params.id}}</p> // ou apemas {{id}}
</template>

// podemos definir o route params dentro da component 
<script>
data(){
    return{
    id: this.$route.params.id
    }
}

<script>
```

## dynamic links

em template:

`<router-link :to="{ name: 'routeName' , params: { id: job.id}}>` 

em script:

`props:["id"]`

no router

```js
const routes = [
    {
        path:'/jobs;:id',
        name: 'JobDetails',
        component:'JobDetails'
        props: true // aceita qualquer route parametro como props
    }
]
```

### redirect and 404 catch route



## fatching Data

fetch the data dentro do mounted ( )  life cicle hook na componente do vue

GET

```js
mounted(){ //fires when the component mounts the DOM
    fetch('http://localhost:3030/jobs') // returna promisse (obj)com os dados em json incluido
    .then((response) => response.json()) //tranforma o json em js e retorna uma promisse tbb
    .then((data) => this.jobs = data )// populamos a varaivel desejada com a data 
    .catch(err => console.log(err.massage))
}
```

# Compotision API

```js
exmport default {
    setup(){
        // data
        // methods
        // computed
        //lifeCycle hooks
    }
}
```

- Group logic together in a setup function

- Easily create reusable logic (function)

como fazer

dentro de um arquivo .vue (component)

```js
<template>
    <div class = "home">
        <p ref ="p"> My name is {{ name }} and my age is {{ age }} </p>
        <button @click="handleClick"> Click me </button>
</template>
 
<script>
import {ref} from 'vue' // usar ref para referenciar elemenots da dom

export default{
    name: 'Home',   
    setup(){ // essa função  dentro do oobjeto da component vai rodar antes que qualquer life-cile hook
        // escrever qualquer JS
        let name = 'mario'
        let age = 30 // not reactive 
        
        // selecionar o <p>
        const o = ref(null)
        
        const handleClick = () => {
            console.log('you clickd me')
        }

        return {name: name, age:age, handleClick:handleClick}
    },
 //   data (){
 //      return {
 //           age:40 // reactive. Se esse valor mudar ele muda no template. Isso nao acontece dentro da variavel age do setup
 //      }
    }         
}
</script>
```
