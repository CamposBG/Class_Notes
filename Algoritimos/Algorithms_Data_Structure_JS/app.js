// const myCards = {
//     deck: [],
//     suits: ['hearts', 'diamonds', 'spades', 'clubs' ],
//     values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     drawedCards: [],
//     createDeck (){
//         const {deck, suits, values} = this;
//         for(let suit of suits ){
//             for(let value of values.split(",")){
//                 deck.push({suit,value})
//             }
//         }
//     },
//     drawCards (num){
//         const {deck, drawedCards} = this;
//          for(let cont = 0 ; cont < num ; cont++){
//             drawedCards.push(deck.pop())
//         }
//         return drawedCards
//     },
//     shuffleCard(){
//         let currentIndex = this.deck.length,  randomIndex;

//         // While there remain elements to shuffle...
//         while (currentIndex != 0) {

//           // Pick a remaining element...
//           randomIndex = Math.floor(Math.random() * currentIndex);
//           currentIndex--;

//           // And swap it with the current element.
//           [this.deck[currentIndex], this.deck[randomIndex]] = [
//             this.deck[randomIndex], this.deck[currentIndex]];
//         }

//         return this.deck;
//       }

// }


//-----------------------------------------------------------

class Wizard {
    constructor(name, color, master, title) {
        this.name = name;
        this.color = color;
        this.master = master;
        this.title = title;
    }

    oath() {
        console.log("We are spirits sent to aid the Free Peoples against the threat of Sauron")
    }

}

class Gandalf extends Wizard {
    constructor(name, color, master, title, weapon = "staff", spells){
        super (name, color, master, title)
        this.weapon = weapon 
        this.spells = {
            fire: "Chamas de Odum",
            light: "Luz de Valinor"
        }
    }
    shout(){
        console.log(`${this.name} says: YOU SHALL NOT PASS!`)
    }
    castFire(){
        return this.spells.fire
    }
    
}

const wizardOne = new Gandalf("Gandalf", "Gray", "Manwë", 
    ["Istar",
    "The Grey", 
    "The White", 
    "Servant of the Secret Fire",
    "Wielder of the Flame of Anor"], ["staff", "Glamdring"]
    )
