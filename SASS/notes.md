# SASS

Precisa ser compinalo em css pois o navegador nao entende sass



.SCSS files => maior compatibilidade com css usa { } 

.SASS  files => usa indentação



Variaveis:

- Prefixo $ 

- ```sass
  $primary-color: blue 
  ```

- possível usar nesting

- ```sass
  nav {
      ul {
      
      }
   
      li{
      
      }
  }
  ```

- Modules and parcials
  
  - Quebrar o sass em diverentes files e  importar eles

```sass
@use 'base':
```

- Functions (retorna algo) and mixins (não retorna algo) 

- extend a style of an element to another

```sass
%message-shared{
    // sp,e style
}
.message{
        @extend %message-shared;
        border-color: green;
}
```

- operator and conditionals



## Start

1. criar pasta scss
   
   1. criar um arquivo style.scss

2. criar pasta css

compilador:

npm

```bash
sudo npm i -g sass
```

```sass --wach scss/style.scss css/style.css
--wach scss/style.scss css/style.css

```

> `whach sass_file_location css_output_location`



compilador alternativo vs code stention live sass compiler



## partials

dentro so scss folder pode criar outros arquivos scss com um underline na frente para mostrar q é um partical tipo` _config.scss` e na seu arquivo principal é só colcocar;

```scss
@import 'config';
@import 'utility';
@import 'buttons';
```

em buttons.scss eu quero usar inheritance onde vai ter compartilhamenmto de estilos



```scss
%btn {
    display: inline-block;
    // more style
}

.btn-primary{
    @extend %btn;
    background-color: $primary // tenho acesso a aqualqer variavem entre os partical e o principal uma vez que serão todos compilados em um unico arquivo css
}
```



## Functions e conditionas

```scss
//função que ve a cor do background e ajusta a cor da cor para ficar legivel


//variavbles
$font-color: lightColor
$primary-color: lightColor
$secondary-color: darkColor

//set text color based on bg
@function set-text0color($color){
    @if(lightness($color) > 70){
        @return darkColor
    } @else {
        @return WhiteColor
    }
}


//mixin que seleciona o backgroundcolor e automatimcamente escolhe a cor do texto
@mixin set-background($color){
    background-color: $color;
    color: set-text-color($color)
}
```

 podemos usar essa função em outros arquivos que importem ele 

```scss
.showcase{
    background-color: $primary-color
    color: set-text-color($primary-color) // dependendo da primary color ( argumento) a cor vai ser escura ou clara
}


// usando mixin podmeos fazer da seguinte forma
.showcase{
    @include set-background($primary-color)
}
```

## For-loop
































