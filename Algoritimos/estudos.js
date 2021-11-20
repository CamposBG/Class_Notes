console.log("js connected")


// reduce () 

//somar elementos de um array
const arr = [1, 1, 10]
const soma = arr.reduce((prev, cur) => {
    return prev + cur;
})
console.log(soma)

// somar valores de uma propriedade de um array object 
const objArr = [{ x: 1 }, { x: 2 }, { x: 3 }];
const valorInicial = 0;
const somaArrObj = objArr.reduce((prev, curr) => {
    return prev + curr.x
}, valorInicial)
console.log(somaArrObj)

// Unir sub-arrays em um unico array
const arr2 = [[1, 2], [1, 2], [1, 2]]
const juntaArr2 = arr2.reduce((prev, curr) => {
    return prev.concat(curr)
}, [])
console.log(juntaArr2)

//contar elementos de um array e retornar um objeto com essa contagem
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
const contagemNomes = names.reduce((todosNomes, nome) => {
    if (nome in todosNomes) {
        todosNomes[nome]++

    } else {
        todosNomes[nome] = 1
    }
    return todosNomes
}, {})
console.log(contagemNomes)

//Reotena um objeto agrupando prpriedades de um arrayObject fazendo um groupBy
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Alice', age: 23 }
];

const groupBy = (objectArray, property) => {
    return objectArray.reduce((groupByArr, obj) => {
        let key = obj[property]
        if (!groupByArr[key]) {
            groupByArr[key] = []
        }
        groupByArr[key].push(obj)
        return groupByArr
    }, {})
}

const groupbyAge = groupBy(people, "name")
console.log(groupbyAge)

// fazendo o mesmo mas agrupando por preço e agrupando por preços maiores  que um valor detrerminado 

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 30 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

function groupByPrice(arrayOfProducts, priceProperty, greaterThan) {
    return arrayOfProducts.reduce((grouped, obj) => {
        let key = obj[priceProperty]
        if (key < greaterThan) {
            key = `< ${greaterThan}`
            if (!grouped[key]) {
                grouped[key] = []
            }
            grouped[key].push(obj)

        } else {
            key = `> ${greaterThan}`
            if (!grouped[key]) {
                grouped[key] = []
            }
            grouped[key].push(obj)
        }
        return grouped

    }, {})
}

const productsByPrice = groupByPrice(products, "price", 40)
console.log(productsByPrice)


// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }