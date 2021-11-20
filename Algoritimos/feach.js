// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => { 
//     return res.json()
//   })
//   .then((data) => {
//     return console.log(data)
//   })
function printPlanets({ data }) {
  data.results.forEach(element => {
    console.log(element.name)
  }); 
  // preciso retornar uma promessa para que eu possa usar .then() seguidos, 
  return Promise.resolve(data)
}

function loadMorePlanets(data) {
  return axios.get(data.next)
}

axios.get("https://swapi.dev/api/planets/")
  .then(printPlanets) 
  .then(loadMorePlanets)
  .then(printPlanets) 
  .then(loadMorePlanets)
  .then(printPlanets)  
  .catch((err) => {
    console.log(`Error: ${err}`)
  })