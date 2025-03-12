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

function PlayerInputX() {
    var symbol = 'X'
}

function PlayerInputO() {
    var symbol = 'O'
}

// function Ref() {
//     for (let i in ['X','O']) {
//         if (box1.innerHTML == box2.innerHTML  == box3.innerHTML == i) {
//             alert('Player',i,'Wins!')
//         }
//     }
// }


box1.addEventListener('click', function() {
    box1.innerHTML = 'O'
})

// TODO: Build the Playerinput first before working on the Ref