const warriorsGames = [
    {
        awayTeam: {
            team: 'Golden State',
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    }
];

// FIRST VERSION 

// function createLi (games, target){

    // for (let game of games) {
    //     const {awayTeam: aTeam, homeTeam: hTeam} = game
    //     const {points: aPoints,} = aTeam
    //     const {points: hPoints,} = hTeam

    //     const gameli = document.createElement("li")
    //     gameli.innerHTML = `${aTeam.team} @ ${hTeam.team}`

    //     if (hPoints > aPoints) {
    //         gameli.innerHTML += ` ${aTeam.points} @ <b> ${hTeam.points} </b>`
    //     } else {
    //         gameli.innerHTML +=` <b>${aTeam.points} </b> @  ${hTeam.points} `
    //     }

    //     if ((hTeam.team === target && hTeam.isWinner  ) || (aTeam.team === target && aTeam.isWinner)) {
    //         gameli.classList.add("win")
    //        } else {
    //         gameli.classList.add("loss")
    //        }
    //     ul.append(gameli)
    // }

// createLi(warriorsGames, "Houston")

// REFACTORING THE ABOVE CODE 

const createChart = (games, targetTeam) => {
    const ul = document.createElement("ul")

    for (let game of games) {
        const gameli = document.createElement("li")
        gameli.innerHTML = getContent(game)
        gameli.classList.add(isWinner(game, targetTeam) ? "win" : "loss")
        ul.append(gameli)
    }
    return ul
}

const getContent = ({ awayTeam, homeTeam }) => {
    const { team: hTeam, points: hPoints } = homeTeam
    const { team: aTeam, points: aPoints } = awayTeam
    const teamNames = `${aTeam} @ ${hTeam}`
    let scoreline;
    if (hPoints > aPoints) {
        scoreLine = `${aPoints} @ <b> ${hPoints} </b>`
    } else {
        scoreLine = `<b>${aPoints} </b> @  ${hPoints} `
    }
    return `${teamNames} ${scoreLine}`
}

function isWinner ({ awayTeam, homeTeam }, targetTeam) {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner
}


const firstTeamTitle = document.createElement("h2")
firstTeamTitle.innerText = "Golden State"
document.body.append(firstTeamTitle)

const char1 = createChart(warriorsGames, "Golden State")
document.body.append(char1)

const seconTeamTitle = document.createElement("h2")
seconTeamTitle.innerText = "Houston"
char1.insertAdjacentElement("afterend",seconTeamTitle)

const char2 = createChart(warriorsGames, "Houston")
document.body.append(char2)


// const char2 = createChart(warriorsGames, "Houston")
// document.body.append(char2)