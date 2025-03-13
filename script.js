const box1 = document.getElementById('r1c1')
const box2 = document.getElementById('r1c2')
const box3 = document.getElementById('r1c3')
const box4 = document.getElementById('r2c1')
const box5 = document.getElementById('r2c2')
const box6 = document.getElementById('r2c3')
const box7 = document.getElementById('r3c1')
const box8 = document.getElementById('r3c2')
const box9 = document.getElementById('r3c3')

var symbol = 'X'
var gameOver = false


function EventListeners(symbol) {

    box1.addEventListener('click', function () {
        if (box1.innerHTML == 'X' || box1.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box1.innerHTML = symbol
        }
    })

    box2.addEventListener('click', function () {
        if (box2.innerHTML == 'X' || box2.innerHTML == 'O') {
            console.log('Slot already filled!')

        } else {
            box2.innerHTML = symbol
        }
    })

    box3.addEventListener('click', function () {
        if (box3.innerHTML == 'X' || box3.innerHTML == 'O') {
            console.log('Slot already filled!')
        } else {
            box3.innerHTML = symbol
        }
    })


}

function PlayerInputX() {
    var symbol = 'X'
    EventListeners(symbol)
}

function PlayerInputO() {
    var symbol = 'O'
    EventListeners(symbol)

}

function Ref() {
    for (let i in ['X','O']) {
        if (box1.innerHTML == box2.innerHTML  == box3.innerHTML == i) {
            alert('Player',i,'Wins!')
        }
    }
}


for (let i = 0; i<=3;i++) {
    PlayerInputX()
    PlayerInputO()
}

// TODO: Need to Entirely rebuild the logic
